import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserVariantService } from './user-variant.service';
import { Authorized } from 'src/shared/decorators/authorized.decorator';
import { Authorization } from 'src/shared/decorators/auth.decorator';
import { CreateUserVariantInput } from './inputs/create-user-variant.input';
import { UserVariantModel } from './models/user-variant.model';

@Resolver('UserVariant')
export class UserVariantResolver {
  constructor(private readonly userVariantService: UserVariantService) {}

  @Authorization()
  @Mutation(() => String, {
    name: 'CreateUserVariant',
  })
  public async createUserVariant(
    @Args('data') input: CreateUserVariantInput,
    @Authorized('id') userId: string,
  ) {
    return this.userVariantService.createUserVariant(input, userId);
  }

  @Authorization()
  @Query(() => UserVariantModel, { name: 'FindUserVariantById' })
  public async findUserVariantById(
    @Args('variantId', { type: () => Int }) variantId: number,
  ) {
    return this.userVariantService.findUserVariantById(variantId);
  }

  @Authorization()
  @Query(() => [UserVariantModel], { name: 'FindUserVariantAll' })
  public async findUserVariantAll(@Authorized('id') userId: string) {
    return this.userVariantService.findUserVariantAll(userId);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'RemoveUserVariantById' })
  public async removeUserVariantById(
    @Args('variantId', { type: () => Int }) variantId: number,
  ) {
    return this.userVariantService.removeUserVariantById(variantId);
  }
}
