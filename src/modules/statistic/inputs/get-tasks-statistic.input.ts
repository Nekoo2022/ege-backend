import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class GetTasksStatisticInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  subjectSlug: string;
}
