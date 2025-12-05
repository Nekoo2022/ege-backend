import { Module } from '@nestjs/common';
import { UserVariantService } from './user-variant.service';
import { UserVariantResolver } from './user-variant.resolver';

@Module({
  providers: [UserVariantResolver, UserVariantService],
})
export class UserVariantModule {}
