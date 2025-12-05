import { Module } from '@nestjs/common';
import { DeactivateService } from './deactivate.service';
import { DeactivateResolver } from './deactivate.resolver';
import { TelegramModule } from 'src/modules/libs/telegram/telegram.module';
import { MailModule } from 'src/modules/libs/mail/mail.module';
import { DeactivateTotpService } from './services/deactivate-totp.service';
import { DeactivateSessionService } from './services/deactivate-session.service';
import { DeactivateNotificationService } from './services/deactivate-notification.service';
import { TokenService } from 'src/modules/token/token.service';

@Module({
  imports: [TelegramModule, MailModule],
  providers: [
    DeactivateService,
    DeactivateResolver,
    DeactivateTotpService,
    DeactivateSessionService,
    DeactivateNotificationService,
    TokenService,
  ],
})
export class DeactivateModule {}
