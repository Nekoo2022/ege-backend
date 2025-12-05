import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';

dotenv.config();

export function isDev(configService: ConfigService) {
  return configService.getOrThrow<boolean>('IS_DEV');
}

export const IS_DEV = process.env.IS_DEV;
