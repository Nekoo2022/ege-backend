import { Module } from '@nestjs/common';
import { AudioService } from './media.service';
import { AudioResolver } from './media.resolver';

@Module({
  providers: [AudioResolver, AudioService],
})
export class AudioModule {}
