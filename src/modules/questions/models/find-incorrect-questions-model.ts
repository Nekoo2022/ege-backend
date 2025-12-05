import { Field, ObjectType } from '@nestjs/graphql';
import { IsCorrectType, UserAnswer } from 'prisma/generated';
import { QuestionModel } from 'src/modules/questions/models/question.model';

@ObjectType()
export class FindIncorrectQuestionsModel implements UserAnswer {
  @Field(() => String)
  id: string;

  @Field(() => String)
  userId: string;

  @Field(() => String)
  questionId: string;

  @Field(() => QuestionModel)
  question: QuestionModel;

  @Field(() => Boolean)
  isCorrect: IsCorrectType;

  @Field(() => String)
  answer: string;

  @Field(() => String)
  subjectSlug: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
