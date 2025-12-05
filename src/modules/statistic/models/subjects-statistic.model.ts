import { Field, ObjectType, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class SubjectsStatisticModel {
  @Field(() => String)
  subjectName: string;

  @Field(() => String)
  subjectSlug: string;

  @Field(() => Int)
  totalQuestions: number; // было String, теперь Int

  @Field(() => Int)
  answered: number;

  @Field(() => Int)
  correct: number;

  @Field(() => Float)
  correctPercent: number; // процент правильных ответов
}
