import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { RedisService } from 'src/core/redis/redis.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
    private readonly config: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    const sessionId = req.session?.id;

    // Debug logs in development
    try {
      const isDev = this.config.get<string>('IS_DEV') === 'true' || this.config.get<string>('IS_DEV') === '1';
      if (isDev) {
        // eslint-disable-next-line no-console
        console.log('[GqlAuthGuard] sessionId:', sessionId);
      }
    } catch (e) {
      // ignore
    }

    if (!sessionId) {
      throw new UnauthorizedException('Нет сессии');
    }

    const key = `${this.config.get<string>('SESSION_FOLDER')}${sessionId}`;
    const data = await this.redis.get(key);

    if (!data) {
      // eslint-disable-next-line no-console
      console.log('[GqlAuthGuard] session not found in redis for id', sessionId);
      throw new UnauthorizedException('Сессия не найдена');
    }

    const session = JSON.parse(data);

    if (!session.userId) {
      // eslint-disable-next-line no-console
      console.log('[GqlAuthGuard] session found but userId is missing in session data', session);
      throw new UnauthorizedException('Пользователь не авторизован');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: session.userId },
    });

    if (!user) {
      throw new UnauthorizedException('Пользователь не найден');
    }

    req.user = user;

    return true;
  }
}
