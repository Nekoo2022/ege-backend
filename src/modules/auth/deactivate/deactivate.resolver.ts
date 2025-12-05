import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { DeactivateService } from './deactivate.service';
import { Authorization } from 'src/shared/decorators/auth.decorator';
import { Authorized } from 'src/shared/decorators/authorized.decorator';
import * as gqlContextType from 'src/shared/types/gql-context.type';
import { UserAgent } from 'src/shared/decorators/user-agent.decorator';
import { DeactivateUserInput } from './inputs/deactivate-user.input';

@Resolver('Deactivate')
export class DeactivateResolver {
  constructor(private readonly deactivateService: DeactivateService) {}

  @Authorization()
  @Mutation(() => Boolean, { name: 'GenerateDeactivateTokenByTelegram' })
  public async generateDeactivateTokenByTelegram(
    @Authorized('id') userId: string,
  ) {
    return this.deactivateService.generateDeactivateTokenByTelegram(userId);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'GenerateDeactivateTokenByEmail' })
  public async generateDeactivateTokenByEmail(
    @UserAgent() userAgent: string,
    @Context() { req }: gqlContextType.GqlContext,
    @Authorized('id') userId: string,
  ) {
    return this.deactivateService.generateDeactivateTokenByEmail(
      userId,
      req,
      userAgent,
    );
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'DeactivateUser' })
  public async deactivateUser(
    @Authorized('id') userId: string,
    @Args('data') input: DeactivateUserInput,
    @Context() { req }: gqlContextType.GqlContext,
  ) {
    return this.deactivateService.deactivateUser(userId, input, req);
  }
}
