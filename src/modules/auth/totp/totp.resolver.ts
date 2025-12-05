import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TotpService } from './totp.service';
import { Authorization } from 'src/shared/decorators/auth.decorator';
import { Authorized } from 'src/shared/decorators/authorized.decorator';
import { TotpInput } from './inputs/totp.input';

@Resolver('Totp')
export class TotpResolver {
  constructor(private readonly totpService: TotpService) {}

  @Authorization()
  @Mutation(() => String, { name: 'GenerateTotpSecret' })
  public async generateTotpSecret(@Authorized('id') userId: string) {
    return this.totpService.generateTotpSecret(userId);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'VerifyTotp' })
  public async verifyTotp(
    @Authorized('id') userId: string,
    @Args('data') input: TotpInput,
  ) {
    return this.totpService.verifyTotp(userId, input);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'DisableTotp' })
  public async disableTotp(@Authorized('id') userId: string) {
    return this.totpService.disableTotp(userId);
  }
}
