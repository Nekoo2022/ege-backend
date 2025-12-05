import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class LoginTotpInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  userId: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  @Length(6)
  token: string;
}
