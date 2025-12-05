import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class FindUserVariantById {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  variantId: string;
}
