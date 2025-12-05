import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class FindTaskCountInput {
  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  public taskNumber: number;

  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public slug: string;
}
