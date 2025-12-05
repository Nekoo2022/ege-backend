import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateAnswerInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public userAnswer: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public questionId: string;
}
