import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class FindIncorrectQuestionsInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public slug: string;
}
