import { Field, ObjectType } from '@nestjs/graphql';
import { Task } from 'prisma/generated';
import { QuestionModel } from 'src/modules/questions/models/question.model';

@ObjectType()
export class TaskModel implements Task {
  @Field(() => String)
  id: string;

  @Field(() => Number)
  taskNumber: number;

  @Field(() => String)
  subjectId: string;

  @Field(() => [QuestionModel])
  questions: QuestionModel[];

  @Field(() => Number)
  questionsCount: number;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
