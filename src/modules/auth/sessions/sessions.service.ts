import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LoginInput } from './inputs/login.input';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { verify } from 'argon2';
import { RedisService } from 'src/core/redis/redis.service';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { SessionData } from 'express-session';
import { getSessionMetadata } from 'src/shared/utils/session-metadata.util';
import { destroySession, saveSession } from 'src/shared/utils/session.util';
import { SessionModel } from './models/SessionModel';
import { LoginTotpInput } from './inputs/login-totp-input';
import { authenticator } from 'otplib';

export type StoredSession = SessionData & { id: string };

@Injectable()
export class SessionsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly redisService: RedisService,
    private readonly configService: ConfigService,
  ) {}
  public async login(input: LoginInput, userAgent: string, req: Request) {
    const { email, password } = input;

    const user = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new NotFoundException('Почта не найдена');
    }

    if (user.isDeactivated) {
      return { message: 'Аккаунт деактивирован' };
    }

    const isPasswordMatch = await verify(user.password, password);

    if (!isPasswordMatch) {
      throw new BadRequestException('Неправильный пароль');
    }

    if (user.isTwoFactor) {
      return {
        userId: user.id,
        requireTotp: true,
        message: 'Введите код из приложения Google Authenticator',
      };
    }

    const metadata = getSessionMetadata(userAgent, req);

    const success = saveSession(req, user, metadata);

    return { success };
  }

  public async loginTotp(
    userAgent: string,
    req: Request,
    input: LoginTotpInput,
  ) {
    const { token, userId } = input;

    const user = await this.prismaService.user.findFirstOrThrow({
      where: { id: userId },
    });

    if (!user.totpSecret) {
      throw new BadRequestException(
        'TOTP не активирован для этого пользователя',
      );
    }

    const isValid = authenticator.check(token, user.totpSecret);

    if (!isValid) {
      throw new BadRequestException('Неверный код');
    }

    const metadata = getSessionMetadata(userAgent, req);

    return saveSession(req, user, metadata);
  }

  public async logout(req: Request) {
    return destroySession(req, this.configService);
  }

  public async findCurrentSession(req: Request) {
    const sessionId = req.session.id;
    const sessionData = await this.redisService.get(
      `${this.configService.getOrThrow<string>('SESSION_FOLDER')}${sessionId}`,
    );

    if (!sessionData) {
      throw new BadRequestException('Нету текущей сессии');
    }

    const session = JSON.parse(sessionData);

    // console.log({ metadata: session, createdAt: session.createdAt });

    return {
      metadata: session.metadata,
      createdAt: session.createdAt ? new Date(session.createdAt) : null,
      id: sessionId,
    };
  }

  public async findSessionsByUser(userId: string) {
    const keys = await this.redisService.keys(
      `${this.configService.getOrThrow<string>('SESSION_FOLDER')}*`,
    );
    const sessions: SessionModel[] = [];

    for (const key of keys) {
      const data = await this.redisService.get(key);
      if (!data) continue;
      const session = JSON.parse(data);
      // console.log(session);
      if (session.userId === userId) {
        sessions.push({
          metadata: session.metadata,
          createdAt: new Date(session.createdAt),
          id: key.split(':')[1],
        });
      }
    }

    return sessions;
  }

  public async clearSession(req: Request) {
    req.res?.clearCookie(this.configService.getOrThrow<string>('SESSION_NAME'));

    return true;
  }

  public async remove(req: Request, id: string) {
    if (req.session.id === id) {
      throw new ConflictException('Текущею сессию удалить нельзя');
    }

    await this.redisService.del(
      `${this.configService.getOrThrow<string>('SESSION_FOLDER')}${id}`,
    );

    return true;
  }
}
