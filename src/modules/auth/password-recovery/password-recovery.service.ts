import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { Request } from 'express';
import { TokenType } from 'prisma/generated';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { MailService } from 'src/modules/libs/mail/mail.service';
import { TelegramService } from 'src/modules/libs/telegram/telegram.service';
import { TokenService } from 'src/modules/token/token.service';
import { getSessionMetadata } from 'src/shared/utils/session-metadata.util';
import { GeneratePasswordRecoveryTokenInput } from './inputs/generate-password-recovery-token';
import { VerifyPasswordRecoveryTokenInput } from './inputs/verify-password-recovery-token.input';
import { ChangePasswordRecoveryInput } from './inputs/change-password.input';

@Injectable()
export class PasswordRecoveryService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly mailService: MailService,
    private readonly telegramService: TelegramService,
    private readonly tokenService: TokenService,
  ) {}

  public async generatePasswordRecoveryToken(input: GeneratePasswordRecoveryTokenInput, userAgent: string, req: Request) {
    const { email } = input;
    const user = await this.prismaService.user.findFirstOrThrow({ where: { email } });
    const token = await this.tokenService.generateToken(user.id, TokenType.PASSWORD_RECOVERY);

    const metadata = getSessionMetadata(userAgent, req);

    await this.telegramService.sendPasswordRecoveryToken(user.id, token.tokenValue);
    await this.mailService.sendPasswordRecoveryToken(user.email, token.tokenValue, metadata);

    return user.id;
  }

  public async verifyPasswordRecoveryToken(input: VerifyPasswordRecoveryTokenInput) {
    const { tokenValue, email } = input;

    const user = await this.prismaService.user.findFirstOrThrow({
      where: { email },
    });

    const token = await this.prismaService.token.findFirstOrThrow({
      where: {
        userId: user.id,
        used: false,
        expiresAt: { gte: new Date() },
        type: TokenType.PASSWORD_RECOVERY,
      },
    });

    await this.tokenService.verifyAndMarkToken(token, tokenValue);

    return true;
  }

  public async changePassword(input: ChangePasswordRecoveryInput) {
    const { email, newPassword } = input;
    await this.prismaService.user.update({
      where: { email },
      data: { password: await hash(newPassword) },
    });

    return true;
  }
}
