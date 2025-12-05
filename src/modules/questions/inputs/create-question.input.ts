import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateQuestionInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public subjectName: string;

  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  public taskNumber: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public text: string;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public question: string;

  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  public experience: number;

  @Field(() => [String])
  @IsString()
  @IsNotEmpty()
  public correctAnswer: string[];

  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  public explanation?: string;
}
