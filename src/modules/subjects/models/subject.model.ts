import { Field, ObjectType } from '@nestjs/graphql';
import { Subject } from 'prisma/generated';
import { QuestionModel } from 'src/modules/questions/models/question.model';
import { TaskModel } from './task.model';

@ObjectType()
export class SubjectModel implements Subject {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  slug: string;

  @Field(() => Number)
  questionsCount: number;

  @Field(() => Number)
  tasksCount: number;

  @Field(() => [TaskModel])
  tasks: TaskModel[];

  @Field(() => [QuestionModel])
  questions: QuestionModel[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
