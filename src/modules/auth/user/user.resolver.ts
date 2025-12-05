import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserModel } from './models/user.model';
import { CreateUserInput } from './inputs/create-user.input';
import { Authorization } from 'src/shared/decorators/auth.decorator';
import { Authorized } from 'src/shared/decorators/authorized.decorator';
import { ChangePasswordInput } from './inputs/change-password.input';
import * as gqlContextType from 'src/shared/types/gql-context.type';
import { FindMeModel } from './models/find-me.model';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserModel], { name: 'FindAllUsers' })
  public async findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Mutation(() => Boolean, { name: 'CreateUser' })
  public async createUser(@Args('data') input: CreateUserInput) {
    return this.userService.createUser(input);
  }

  @Authorization()
  @Query(() => FindMeModel, { name: 'FindMe' })
  public async findMe(@Authorized('id') userId: string | null) {
    return this.userService.findMe(userId);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'ChangeEmail' })
  public async changeEmail(@Args('email') email: string, @Authorized('id') id: string) {
    return this.userService.changeEmail(id, email);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'ChangePassword' })
  public async changePassword(@Args('data') input: ChangePasswordInput, @Authorized('id') id: string) {
    return this.userService.changePassword(id, input);
  }
}
