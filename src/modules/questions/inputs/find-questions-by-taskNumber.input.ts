import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class FindQuestionsByTaskNumberInput {
  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  public taskNumber: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public slug: string;

  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  public skip: number;

  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  public take: number;
}
