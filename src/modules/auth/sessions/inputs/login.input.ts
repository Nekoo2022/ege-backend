import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType()
export class LoginInput {
  @Field(() => String)
  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  public password: string;

  @Field(() => String)
  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  public email: string;
}
