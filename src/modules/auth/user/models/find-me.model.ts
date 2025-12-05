import { Field, Float, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User, UserRating } from 'prisma/generated';
import { UserModel } from './user.model';

registerEnumType(UserRating, {
  name: 'UserRating',
});

@ObjectType()
export class FindMeModel {
  @Field(() => UserModel, { nullable: true })
  user?: UserModel;

  @Field(() => Boolean)
  isAuth: boolean;
}
