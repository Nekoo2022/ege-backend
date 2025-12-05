import { Args, Query, Resolver } from '@nestjs/graphql';
import { AudioService } from './media.service';
import { ImageInput } from './inputs/get-image-url.input';
import { AudioInput } from './inputs/get-audio.url.input';
import { GetSignedUrlModel } from './model/get-signed-url.model';

@Resolver('Audio')
export class AudioResolver {
  constructor(private readonly audioService: AudioService) {}

  @Query(() => String, { name: 'GetAudioUrl' })
  public async getAudioUrl(@Args('data') input: AudioInput) {
    return this.audioService.getAudioUrl(input);
  }

  @Query(() => GetSignedUrlModel, { name: 'GetImageUrl' })
  public async getImageUrl(@Args('data') input: ImageInput) {
    return this.audioService.getImageUrl(input);
  }
}
