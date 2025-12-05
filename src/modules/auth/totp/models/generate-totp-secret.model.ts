import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GenerateTotpSecretModel {
  @Field(() => String)
  qrCodeDataUrl: string;

  @Field(() => String)
  secret: string;
}
