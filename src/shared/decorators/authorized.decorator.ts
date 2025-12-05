import { createParamDecorator, type ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from 'prisma/generated';

export const Authorized = createParamDecorator((data: keyof User, ctx: ExecutionContext) => {
  let user: User;

  if (ctx.getType() === 'http') {
    user = ctx.switchToHttp().getRequest().user;
  } else {
    const context = GqlExecutionContext.create(ctx);
    user = context.getContext().req.user;
    // console.log(context.getContext().req.user);
  }

  console.log(user);

  if (!user) {
    return null;
  }

  return data ? user[data] : user;
});
