import type { ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';

export function getGraphqlConfig(
  configService: ConfigService,
): ApolloDriverConfig {
  return {
    playground: configService.getOrThrow<boolean>('IS_DEV'),
    path: configService.getOrThrow<string>('GRAPHQL_PREFIX'),
    autoSchemaFile: join(process.cwd(), 'src/core/graphql/schema.graphql'),
    sortSchema: true,
    context: (params: { req: Request; res: Response }) => ({
      req: params.req,
      res: params.res,
    }),
  };
}
