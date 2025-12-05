import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class TaskSelectionInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  slug: string;

  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  taskNumber: number;

  @Field(() => Number)
  @IsNumber()
  @IsNotEmpty()
  count: number;
}

@InputType()
export class CreateUserVariantInput {
  @Field(() => [TaskSelectionInput])
  public selections: TaskSelectionInput[];
}
