import { Field, Float, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User, UserRating } from 'prisma/generated';

registerEnumType(UserRating, {
  name: 'UserRating',
});

@ObjectType()
export class UserModel implements User {
  @Field(() => String)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => Number)
  experience: number;

  @Field(() => UserRating)
  rating: UserRating;

  @Field(() => String, { nullable: true })
  tempTotpSecret: string | null;

  @Field(() => String, { nullable: true })
  totpSecret: string | null;

  @Field(() => Boolean)
  isTwoFactor: boolean;

  @Field(() => Boolean)
  isDeactivated: boolean;

  @Field(() => String, { nullable: true })
  avatar: string | null;

  @Field(() => String, { nullable: true })
  telegramId: string | null;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
