// Polyfill `globalThis.crypto` for node versions < 20 which don't provide Web Crypto API
if (!(globalThis as any).crypto) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  (globalThis as any).crypto = require('crypto');
}

import { NestFactory } from '@nestjs/core';
import { CoreModule } from './core/core.module';
import { ValidationPipe } from '@nestjs/common';
import session from 'express-session';
import { RedisStore } from 'connect-redis';
import { createClient } from 'redis';
import { ConfigService } from '@nestjs/config';
import { ms, StringValue } from './shared/utils/ms.util';
import { parseBoolean } from './shared/utils/parse-boolean.util';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);
  const config = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const redisClient = createClient({
    url: config.getOrThrow<string>('REDIS_URI'),
  });

  await redisClient.connect();

  app.enableCors({
    origin: config.getOrThrow<string>('ALLOWED_ORIGIN'),
    credentials: true,
  });

  const sameSite = config.getOrThrow<string>('SESSION_SAME_SITE') as 'lax' | 'none' | 'strict';

  app.use(
    session({
      store: new RedisStore({
        client: redisClient,
        prefix: config.getOrThrow<string>('SESSION_FOLDER'),
      }),
      name: config.getOrThrow<string>('SESSION_NAME'),
      secret: config.getOrThrow<string>('SESSION_SECRET'),
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: ms(config.getOrThrow<StringValue>('SESSION_MAX_AGE')),
        httpOnly: parseBoolean(config.getOrThrow<string>('SESSION_HTTP_ONLY')),
        secure: parseBoolean(config.getOrThrow<string>('SESSION_SECURE')),
        sameSite: sameSite ?? 'lax',
      },
    }),
  );

  await app.listen(process.env.APPLICATION_PORT ?? 4000);
}
bootstrap();
