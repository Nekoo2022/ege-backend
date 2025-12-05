import { Mutation, Resolver } from '@nestjs/graphql';
import { TelegramService } from './telegram.service';
import { Authorization } from 'src/shared/decorators/auth.decorator';
import { Authorized } from 'src/shared/decorators/authorized.decorator';

@Resolver('Token')
export class TelegramResolver {
  constructor(private readonly telegramService: TelegramService) {}

  @Authorization()
  @Mutation(() => String, { name: 'GenerateTelegramConnectionToken' })
  public async generateTelegramToken(@Authorized('id') userId: string) {
    return this.telegramService.generateTelegramConnectionToken(userId);
  }
}
