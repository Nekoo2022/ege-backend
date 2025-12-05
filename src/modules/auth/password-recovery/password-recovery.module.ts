import { Module } from '@nestjs/common';
import { PasswordRecoveryService } from './password-recovery.service';
import { PasswordRecoveryResolver } from './password-recovery.resolver';
import { TelegramModule } from 'src/modules/libs/telegram/telegram.module';
import { MailModule } from 'src/modules/libs/mail/mail.module';
import { TokenService } from 'src/modules/token/token.service';

@Module({
  imports: [TelegramModule, MailModule],
  providers: [PasswordRecoveryResolver, PasswordRecoveryService, TokenService],
})
export class PasswordRecoveryModule {}
