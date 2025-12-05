import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GetSignedUrlModel {
  @Field(() => [String])
  imageUrls: string[];

  @Field(() => [String])
  explanationImageUrls: string[];

  @Field(() => [String])
  globalImageUrls: string[];
}
