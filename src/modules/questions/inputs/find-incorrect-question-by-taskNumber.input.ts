import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class FindIncorrectQuestionsByTaskNumberInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public slug: string;

  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  public taskNumber: number;
}
