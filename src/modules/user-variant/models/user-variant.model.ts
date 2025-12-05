import { Field, ObjectType } from '@nestjs/graphql';
import { UserVariant } from 'prisma/generated';
import { UserModel } from 'src/modules/auth/user/models/user.model';
import { QuestionModel } from 'src/modules/questions/models/question.model';

@ObjectType()
export class UserVariantModel implements UserVariant {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  userId: string;

  @Field(() => UserModel)
  user: UserModel;

  @Field(() => [QuestionModel])
  questions: QuestionModel[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
