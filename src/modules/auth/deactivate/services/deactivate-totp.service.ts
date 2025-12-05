import { BadRequestException, Injectable } from '@nestjs/common';
import { authenticator } from 'otplib';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class DeactivateTotpService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async verifyAuthenticatorToken(userId: string, tokenValue: string) {
    const user = await this.prismaService.user.findFirstOrThrow({
      where: { id: userId },
    });

    if (!user.totpSecret)
      throw new BadRequestException(
        'TOTP не активирован для этого пользователя',
      );

    const isValid = authenticator.check(tokenValue, user.totpSecret);

    if (!isValid) throw new BadRequestException('Неверный код');
  }
}
