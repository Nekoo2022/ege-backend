import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SessionsService } from './sessions.service';
import { LoginInput } from './inputs/login.input';
import * as gqlContextType from 'src/shared/types/gql-context.type';
import { UserAgent } from 'src/shared/decorators/user-agent.decorator';
import { SessionModel } from './models/SessionModel';
import { Authorized } from 'src/shared/decorators/authorized.decorator';
import { Authorization } from 'src/shared/decorators/auth.decorator';
import { LoginTotpInput } from './inputs/login-totp-input';
import { LoginModel } from './models/login.model';

@Resolver('Session')
export class SessionsResolver {
  constructor(private readonly sessionsService: SessionsService) {}

  @Mutation(() => LoginModel, { name: 'Login' })
  public async login(
    @Args('data') input: LoginInput,
    @Context() { req }: gqlContextType.GqlContext,
    @UserAgent() userAgent: string,
  ) {
    return this.sessionsService.login(input, userAgent, req);
  }

  @Mutation(() => Boolean, { name: 'LoginTotp' })
  public async loginTotp(
    @Args('data') input: LoginTotpInput,
    @Context() { req }: gqlContextType.GqlContext,
    @UserAgent() userAgent: string,
  ) {
    return this.sessionsService.loginTotp(userAgent, req, input);
  }

  @Mutation(() => Boolean, { name: 'Logout' })
  public async logout(@Context() { req }: gqlContextType.GqlContext) {
    return this.sessionsService.logout(req);
  }

  @Query(() => SessionModel, { name: 'FindCurrentSession' })
  public async findCurrentSession(
    @Context() { req }: gqlContextType.GqlContext,
  ) {
    return this.sessionsService.findCurrentSession(req);
  }

  @Authorization()
  @Query(() => [SessionModel], { name: 'FindSessionsByUser' })
  public async findSessionsByUser(@Authorized('id') userId: string) {
    return this.sessionsService.findSessionsByUser(userId);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'RemoveSession' })
  public async remove(
    @Context() { req }: gqlContextType.GqlContext,
    @Args('id') id: string,
  ) {
    return this.sessionsService.remove(req, id);
  }
}
