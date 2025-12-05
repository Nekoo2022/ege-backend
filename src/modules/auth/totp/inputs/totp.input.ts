import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class TotpInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @Length(6)
  token: string;
}
