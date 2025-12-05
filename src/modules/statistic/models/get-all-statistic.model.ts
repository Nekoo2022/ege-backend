import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class GetAllStatisticModel {
  @Field(() => Int)
  correctPercent: number; // процент правильных ответов

  @Field(() => Int)
  totalAnswer: number; // процент правильных ответов

  @Field(() => Int)
  totalCorrectAnswer: number; // процент правильных ответов
}
