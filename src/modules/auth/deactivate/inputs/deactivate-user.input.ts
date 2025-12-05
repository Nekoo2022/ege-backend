import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class DeactivateUserInput {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  channel?: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  tokenValue: string;
}
