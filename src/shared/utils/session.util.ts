import { Request } from 'express';
import { SessionMetadata } from '../types/session-metadata.type';
import { User } from 'prisma/generated';
import { InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export function saveSession(req: Request, user: User, metadata: SessionMetadata) {
  return new Promise((resolve, reject) => {
    req.session.createdAt = new Date();
    req.session.userId = user.id;
    req.session.metadata = metadata;

    req.session.save((err) => {
      if (err) {
        return reject(new InternalServerErrorException('Не удалось сохранить сессию'));
      }
      // Debug printing in dev environment
      try {
        const isDev = process.env.IS_DEV === 'true' || process.env.IS_DEV === '1';
        if (isDev) {
          // eslint-disable-next-line no-console
          console.log('[saveSession] saved session for user:', user.id, 'sessionId:', (req.session as any).id);
        }
      } catch (e) {
        // ignore
      }

      resolve(true);
    });
  });
}

export function destroySession(req: Request, configService: ConfigService) {
  return new Promise((resolve, reject) => {
    req.session.destroy((err) => {
      if (err) {
        return reject(new InternalServerErrorException('Не удалось удалить сессию'));
      }
      req.res?.clearCookie(configService.getOrThrow<string>('SESSION_NAME'));

      resolve(true);
    });
  });
}
