import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { authenticator } from 'otplib';
import * as qrcode from 'qrcode';
import { TotpInput } from './inputs/totp.input';

@Injectable()
export class TotpService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async generateTotpSecret(userId: string) {
    const secret = authenticator.generateSecret();

    const user = await this.prismaService.user.update({
      where: { id: userId },
      data: { tempTotpSecret: secret },
    });

    if (user.isTwoFactor) {
      throw new BadRequestException(
        'Двухфакторная аутентификация уже активирована',
      );
    }

    const otpauth = authenticator.keyuri(userId, 'EGE', secret);
    const qrCodeDataUrl = await qrcode.toDataURL(otpauth);

    return qrCodeDataUrl;
  }

  public async verifyTotp(userId: string, input: TotpInput) {
    const { token } = input;

    const user = await this.prismaService.user.findUniqueOrThrow({
      where: { id: userId },
    });

    if (user.isTwoFactor) {
      throw new BadRequestException(
        'Двухфакторная аутентификация уже активирована',
      );
    }

    if (!user.tempTotpSecret) {
      throw new BadRequestException('Нет активного TOTP для подтверждения');
    }

    const secret = user.tempTotpSecret;
    const isValid = authenticator.check(token, secret);

    if (isValid) {
      await this.prismaService.user.update({
        where: { id: userId },
        data: { isTwoFactor: true, totpSecret: secret, tempTotpSecret: null },
      });
    }

    return isValid;
  }

  public async disableTotp(userId: string) {
    await this.prismaService.user.update({
      where: { id: userId },
      data: { totpSecret: null, isTwoFactor: false },
    });

    return true;
  }
}
