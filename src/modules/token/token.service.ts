import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Token, TokenType } from 'prisma/generated';
import { randomInt } from 'crypto';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class TokenService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async generateToken(userId: string, tokenType: TokenType) {
    const token = await this.prismaService.$transaction(async (prisma) => {
      await prisma.token.deleteMany({
        where: {
          userId,
          type: tokenType,
          used: false,
          expiresAt: { gte: new Date() },
        },
      });
      return prisma.token.create({
        data: {
          userId,
          type: tokenType,
          expiresAt: new Date(Date.now() + 15 * 60 * 1000),
          tokenValue: randomInt(100000, 1000000).toString(),
        },
      });
    });

    return token;
  }

  public async verifyAndMarkToken(token: Token, tokenValue: string) {
    // console.log(token.tokenValue === tokenValue);
    if (token?.tokenValue !== tokenValue) {
      throw new BadRequestException('Неверный или устаревший токен');
    }

    await this.markTokenUsed(token.id);
  }

  public async markTokenUsed(tokenId: string) {
    await this.prismaService.token.update({
      where: { id: tokenId },
      data: { used: true },
    });
  }
}
