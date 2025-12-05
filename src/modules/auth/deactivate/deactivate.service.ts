import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { TokenType } from 'prisma/generated';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { getSessionMetadata } from 'src/shared/utils/session-metadata.util';
import { DeactivateUserInput } from './inputs/deactivate-user.input';
import { DeactivateTotpService } from './services/deactivate-totp.service';
import { DeactivateSessionService } from './services/deactivate-session.service';
import { DeactivateNotificationService } from './services/deactivate-notification.service';
import { TokenService } from 'src/modules/token/token.service';

@Injectable()
export class DeactivateService {
  constructor(
    private readonly prismaService: PrismaService,
    protected readonly deactivateTotpService: DeactivateTotpService,
    protected readonly deactivateSessionService: DeactivateSessionService,
    protected readonly deactivateNotificationService: DeactivateNotificationService,
    protected readonly tokenService: TokenService,
  ) {}

  public async deactivateUser(userId: string, input: DeactivateUserInput, req: Request) {
    const { tokenValue, channel } = input;

    if (channel) {
      await this.deactivateTotpService.verifyAuthenticatorToken(userId, tokenValue);
    } else {
      const token = await this.prismaService.token.findFirstOrThrow({
        where: {
          userId,
          type: TokenType.DEACTIVATE,
          used: false,
          expiresAt: { gte: new Date() },
        },
      });

      // console.log(token);

      await this.tokenService.verifyAndMarkToken(token, tokenValue);
    }

    await this.finalizeDeactivation(userId, req);

    return true;
  }

  public async generateDeactivateTokenByTelegram(userId: string) {
    const token = await this.tokenService.generateToken(userId, TokenType.DEACTIVATE);
    // console.log(token);
    await this.deactivateNotificationService.sendTelegram(userId, token.tokenValue);

    return true;
  }

  public async generateDeactivateTokenByEmail(userId: string, req: Request, userAgent: string) {
    const token = await this.tokenService.generateToken(userId, TokenType.DEACTIVATE);

    const metadata = getSessionMetadata(userAgent, req);

    await this.deactivateNotificationService.sendEmail(userId, token.tokenValue, metadata);

    return true;
  }

  private async finalizeDeactivation(userId: string, req: Request) {
    await this.prismaService.user.update({
      where: { id: userId },
      data: { isDeactivated: true },
    });

    await this.deactivateSessionService.clear(userId);
    await this.deactivateSessionService.destroy(req);
  }
}
