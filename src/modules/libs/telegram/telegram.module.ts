import { Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { TokenService } from 'src/modules/token/token.service';
import { TelegramResolver } from './telegram.resolver';

@Module({
  imports: [
    ConfigModule,
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        token: configService.getOrThrow('TELEGRAM_BOT_TOKEN'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [TelegramService, TelegramResolver, PrismaService, TokenService],
  exports: [TelegramService],
})
export class TelegramModule {}
