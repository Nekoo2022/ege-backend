import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AudioInput {
  @Field(() => String)
  slug: string;

  @Field(() => Number)
  taskNumber: number;

  @Field(() => Number)
  taskIndex: number;
}
