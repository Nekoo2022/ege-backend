import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { PasswordRecoveryService } from './password-recovery.service';
import { GeneratePasswordRecoveryTokenInput } from './inputs/generate-password-recovery-token';
import { UserAgent } from 'src/shared/decorators/user-agent.decorator';
import * as gqlContextType from 'src/shared/types/gql-context.type';
import { VerifyPasswordRecoveryTokenInput } from './inputs/verify-password-recovery-token.input';
import { ChangePasswordRecoveryInput } from './inputs/change-password.input';

@Resolver('PasswordRecovery')
export class PasswordRecoveryResolver {
  constructor(private readonly passwordRecoveryService: PasswordRecoveryService) {}

  @Mutation(() => String, { name: 'GeneratePasswordRecoveryToken' })
  public async generatePasswordRecoveryToken(
    @Args('data') input: GeneratePasswordRecoveryTokenInput,
    @UserAgent() userAgent: string,
    @Context() { req }: gqlContextType.GqlContext,
  ) {
    return this.passwordRecoveryService.generatePasswordRecoveryToken(input, userAgent, req);
  }

  @Mutation(() => String, { name: 'VerifyPasswordRecoveryToken' })
  public async verifyPasswordRecoveryToken(@Args('data') input: VerifyPasswordRecoveryTokenInput) {
    return this.passwordRecoveryService.verifyPasswordRecoveryToken(input);
  }

  @Mutation(() => String, { name: 'ChangePasswordRecovery' })
  public async changePassword(@Args('data') input: ChangePasswordRecoveryInput) {
    return this.passwordRecoveryService.changePassword(input);
  }
}
