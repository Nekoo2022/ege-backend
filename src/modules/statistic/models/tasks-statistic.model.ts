import { Field, ObjectType, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class TasksStatisticModel {
  @Field(() => Int)
  answered: number;

  @Field(() => Int)
  totalQuestions: number; // было String, теперь Int

  @Field(() => Int)
  taskNumber: number;

  @Field(() => Int)
  correct: number;

  @Field(() => Float)
  correctPercent: number; // процент правильных ответов
}
