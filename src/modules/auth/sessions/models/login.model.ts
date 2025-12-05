import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginModel {
  @Field(() => Boolean, { nullable: true })
  success?: boolean;

  @Field(() => Boolean, { nullable: true })
  requireTotp?: boolean;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => String, { nullable: true })
  message?: string;
}
