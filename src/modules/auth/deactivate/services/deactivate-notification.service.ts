import { Injectable } from '@nestjs/common';
import { MailService } from 'src/modules/libs/mail/mail.service';
import { TelegramService } from 'src/modules/libs/telegram/telegram.service';
import { SessionMetadata } from 'src/shared/types/session-metadata.type';

@Injectable()
export class DeactivateNotificationService {
  constructor(
    private readonly mailService: MailService,
    private readonly telegramService: TelegramService,
  ) {}

  public async sendTelegram(userId: string, tokenValue: string) {
    this.telegramService.sendDeactivateToken(userId, tokenValue);
  }

  public async sendEmail(userId: string, tokenValue: string, metadata: SessionMetadata) {
    this.mailService.sendDeactivateToken(userId, tokenValue, metadata);
  }
}
