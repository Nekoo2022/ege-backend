import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

@InputType()
export class ChangePasswordInput {
  @Field(() => String)
  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  public oldPassword: string;

  @Field(() => String)
  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  public newPassword: string;
}
