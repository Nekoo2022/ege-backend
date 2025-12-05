import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { IsCorrectType } from 'prisma/generated';

registerEnumType(IsCorrectType, {
  name: 'IsCorrectType',
});

@ObjectType()
export class CreateAnswerModel {
  @Field(() => IsCorrectType)
  isCorrect: IsCorrectType;
}
