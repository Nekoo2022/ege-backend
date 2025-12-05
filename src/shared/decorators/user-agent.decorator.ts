import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';

export const UserAgent = createParamDecorator(
  (data: any, context: ExecutionContext) => {
    if (context.getType() === 'http') {
      const request = context.switchToHttp().getRequest() as Request;

      return request.headers['user-agent'];
    } else {
      const ctx = GqlExecutionContext.create(context);

      return ctx.getContext().req.headers['user-agent'];
    }
  },
);
