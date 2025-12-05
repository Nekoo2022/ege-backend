import { Resolver } from '@nestjs/graphql';
import { TokenService } from './token.service';

@Resolver('Token')
export class TokenResolver {
  constructor(private readonly tokenService: TokenService) {}
}
