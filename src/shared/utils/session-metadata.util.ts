import * as countres from 'i18n-iso-countries';
import { IS_DEV } from './IsDev.util';
import { Request } from 'express';
import { lookup } from 'geoip-lite';
import DeviceDetector = require('device-detector-js');
countres.registerLocale(require('i18n-iso-countries/langs/en.json'));

export function getSessionMetadata(userAgent: string, req: Request) {
  const ip = IS_DEV
    ? '173.166.164.121'
    : Array.isArray(req.headers['cf-connecting-ip'])
      ? req.headers['cf-connecting-ip'][0]
      : req.headers['cf-connecting-ip'] ||
        (typeof req.headers['x-forwarded-for'] === 'string'
          ? req.headers['x-forwarded-for'].split(',')[0]
          : req.ip);

  const location = lookup(ip ?? '');

  const device = new DeviceDetector().parse(userAgent);

  return {
    location: {
      country: location?.country ?? '',
      city: location?.city ?? '',
      latidute: location?.ll[0] ?? 0,
      longitude: location?.ll[1] ?? 0,
    },
    device: {
      browser: device.client?.name ?? '',
      type: device.device?.type ?? '',
      os: device.os?.name ?? '',
    },
    ip: ip || 'Неизвестно',
  };
}
