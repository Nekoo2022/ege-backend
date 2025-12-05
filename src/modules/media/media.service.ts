import { Injectable } from '@nestjs/common';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { ImageInput } from './inputs/get-image-url.input';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { AudioInput } from './inputs/get-audio.url.input';

@Injectable()
export class AudioService {
  private readonly client: S3Client;
  private readonly bucket: string;

  public constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {
    this.client = new S3Client({
      endpoint: this.configService.getOrThrow<string>('S3_ENDPOINT'),
      region: this.configService.getOrThrow<string>('S3_REGION'),
      credentials: {
        accessKeyId: this.configService.getOrThrow<string>('S3_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.getOrThrow<string>('S3_SECRET_ACCESS_KEY'),
      },
      forcePathStyle: true,
    });

    this.bucket = this.configService.getOrThrow<string>('S3_BUCKET_NAME');
  }

  public async getAudioUrl(input: AudioInput) {
    const { slug, taskIndex, taskNumber } = input;
    const filename = `ege-audio/${slug}/audio-${taskNumber}-${taskIndex}.mp3`;
    const command = new GetObjectCommand({
      Bucket: this.bucket,
      Key: filename,
    });

    const url = await getSignedUrl(this.client, command);

    return url;
  }

  public async getImageUrl(input: ImageInput) {
    const { imagesKeys, explanationKeys, globalImages } = input;
    const imageUrls: string[] = [];
    const explanationImageUrls: string[] = [];
    const globalImageUrls: string[] = [];

    // console.log(globalImages);

    for (const key of imagesKeys) {
      const command = new GetObjectCommand({ Bucket: this.bucket, Key: key });
      imageUrls.push(await getSignedUrl(this.client, command));
    }

    for (const key of explanationKeys) {
      const command = new GetObjectCommand({ Bucket: this.bucket, Key: key });
      explanationImageUrls.push(await getSignedUrl(this.client, command));
    }

    for (const key of globalImages) {
      const command = new GetObjectCommand({ Bucket: this.bucket, Key: key });
      globalImageUrls.push(await getSignedUrl(this.client, command));
    }

    return { imageUrls, explanationImageUrls, globalImageUrls };
  }
}
