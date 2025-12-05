import { BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Telegraf } from 'telegraf';
import { Ctx, Start, Update } from 'nestjs-telegraf';
import { Token, TokenType } from 'prisma/generated';
import { TokenService } from 'src/modules/token/token.service';

@Update()
export class TelegramService {
  private readonly _token: string;
  private readonly _telegramBot: Telegraf;
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
    private readonly tokenService: TokenService,
  ) {
    this._telegramBot = new Telegraf(this.configService.getOrThrow<string>('TELEGRAM_BOT_TOKEN'));
  }

  @Start()
  public async onStart(@Ctx() ctx: any) {
    const chatId = ctx.chat?.id.toString();
    const tokenId = ctx.message.text.split(' ')[1];

    const token = await this.verifyAndMarkTelegramConnectionToken(tokenId);

    await this.prismaService.user.update({
      where: { id: token.userId },
      data: { telegramId: chatId },
    });
  }

  public async verifyAndMarkTelegramConnectionToken(tokenId: string) {
    const token = await this.prismaService.token.findFirst({
      where: {
        id: tokenId,
        used: false,
        expiresAt: { gte: new Date() },
        type: TokenType.TELEGRAM,
      },
    });

    if (!token) throw new BadRequestException('Неверный или устаревший токен');

    await this.tokenService.markTokenUsed(token.id);

    return token;
  }

  public async sendDeactivateToken(userId: string, token: string) {
    const user = await this.prismaService.user.findUniqueOrThrow({
      where: { id: userId },
    });

    const chatId = user.telegramId;

    if (!chatId) {
      throw new BadRequestException('Telegram ID не найден');
    }

    await this._telegramBot.telegram.sendMessage(chatId, `Ваш токен для деактивации аккаунта: ${token}`);
  }

  public async sendPasswordRecoveryToken(userId: string, token: string) {
    const user = await this.prismaService.user.findUniqueOrThrow({
      where: { id: userId },
    });

    const chatId = user.telegramId;

    if (!chatId) {
      throw new BadRequestException('Telegram ID не найден');
    }

    await this._telegramBot.telegram.sendMessage(chatId, `Ваш токен для восстановления пароля: ${token}`);
  }

  public async generateTelegramConnectionToken(userId: string) {
    const user = await this.prismaService.user.findUniqueOrThrow({
      where: { id: userId },
    });

    if (user.telegramId) throw new BadRequestException('Вы уже подключены к Telegram');

    const token = await this.tokenService.generateToken(userId, TokenType.TELEGRAM);

    return token.id;
  }
}
