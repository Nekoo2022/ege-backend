import { Injectable } from '@nestjs/common';
import { SessionMetadata } from 'src/shared/types/session-metadata.type';
import { render } from '@react-email/components';
import { MailerService } from '@nestjs-modules/mailer';
import { DeactivateTemplate } from './templates/deactivate.template';
import { PasswordRecoveryTemplate } from './templates/password-recovery.template';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  public constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  public async sendDeactivateToken(email: string, token: string, metadata: SessionMetadata) {
    const html = await render(DeactivateTemplate({ token, metadata }));
    return this.sendMail(email, 'Деактивация аккаунта ', html);
  }

  public async sendPasswordRecoveryToken(email: string, token: string, metadata: SessionMetadata) {
    const domain = this.configService.getOrThrow<string>('ALLOWED_ORIGIN');
    const html = await render(PasswordRecoveryTemplate({ token, metadata }));
    return this.sendMail(email, 'Восстановление пароля', html);
  }

  private sendMail(email: string, subject: string, html: string) {
    return this.mailerService.sendMail({
      to: email,
      subject,
      html,
    });
  }
}
