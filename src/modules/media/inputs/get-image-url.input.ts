import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ImageInput {
  @Field(() => [String])
  imagesKeys: string[];

  @Field(() => [String])
  explanationKeys: string[];

  @Field(() => [String])
  globalImages: string[];
}
