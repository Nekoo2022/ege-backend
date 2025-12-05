import { Field, ObjectType } from '@nestjs/graphql';
import { Question } from 'prisma/generated';
import { GraphQLJSON } from 'graphql-type-json';
import { TaskModel } from 'src/modules/subjects/models/task.model';
import { SubjectModel } from 'src/modules/subjects/models/subject.model';
import { JsonObject, JsonValue } from 'prisma/generated/runtime/library';

@ObjectType()
export class QuestionModel implements Question {
  //Базовые свойства вопроса:
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  question: string | null;

  @Field(() => String, { nullable: true })
  text: string | null;

  @Field(() => [String], { nullable: true })
  correctAnswer: string[];

  @Field(() => String, { nullable: true })
  explanation: string | null;

  @Field(() => Number, { nullable: true })
  experience: number;

  @Field(() => String, { nullable: true })
  type: string;

  @Field(() => Boolean)
  partialAllowed: boolean;

  @Field(() => Boolean)
  hasCorrectAnswer: boolean;

  @Field(() => Number, { nullable: true })
  partialThreshold: number | null;

  @Field(() => GraphQLJSON, { nullable: true })
  subQuestions: JsonObject | null;

  @Field(() => [String])
  images: string[];

  @Field(() => [String])
  explanationImages: string[];

  @Field(() => [String])
  globalImages: string[];

  @Field(() => String, { nullable: true })
  imagePath: string | null;

  @Field(() => String)
  taskId: string;

  @Field(() => TaskModel)
  task: TaskModel;

  @Field(() => SubjectModel)
  subject: SubjectModel;

  @Field(() => String)
  subjectId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  // Свойства для аудио вопроса
  @Field(() => String, { nullable: true })
  audioPath: string | null;

  @Field(() => String, { nullable: true })
  intro: string | null;

  @Field(() => GraphQLJSON, { nullable: true })
  speakers: any;

  @Field(() => [String], { nullable: true })
  statements: string[];

  @Field(() => GraphQLJSON, { nullable: true })
  tableSpec: any;
}
