import { Field, ObjectType } from '@nestjs/graphql';
import { QuestionModel } from 'src/modules/questions/models/question.model';

@ObjectType()
export class CreateRandomQuestionModel {
  @Field(() => QuestionModel, { nullable: true })
  question?: QuestionModel;

  @Field(() => String, { nullable: true })
  message?: string;
}
