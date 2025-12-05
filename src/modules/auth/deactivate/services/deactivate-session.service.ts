import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/core/redis/redis.service';
import { ConfigService } from '@nestjs/config';
import { destroySession } from 'src/shared/utils/session.util';
import { Request } from 'express';

@Injectable()
export class DeactivateSessionService {
  constructor(
    private readonly redisService: RedisService,
    private readonly configService: ConfigService,
  ) {}

  async clear(userId: string) {
    const keys = await this.redisService.keys('*');
    for (const key of keys) {
      const sessionData = await this.redisService.get(key);
      if (sessionData) {
        const session = JSON.parse(sessionData);
        if (session.userId === userId) {
          await this.redisService.del(key);
        }
      }
    }
  }

  async destroy(req: Request) {
    await destroySession(req, this.configService);
  }
}
