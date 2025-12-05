import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getGraphqlConfig } from './configs/graphql.config';
import { UserModule } from '../modules/auth/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './redis/redis.module';
import { SessionsModule } from 'src/modules/auth/sessions/sessions.module';
import { DeactivateModule } from 'src/modules/auth/deactivate/deactivate.module';
import { QuestionsModule } from 'src/modules/questions/questions.module';
import { SubjectsModule } from 'src/modules/subjects/subjects.module';
import { AnswersModule } from 'src/modules/answers/answers.module';
import { StatisticModule } from '../modules/statistic/statistic.module';
import { UserVariantModule } from 'src/modules/user-variant/user-variant.module';
import { TotpModule } from 'src/modules/auth/totp/totp.module';
import { TelegramModule } from 'src/modules/libs/telegram/telegram.module';
import { MailModule } from 'src/modules/libs/mail/mail.module';
import { PasswordRecoveryModule } from 'src/modules/auth/password-recovery/password-recovery.module';
import { AudioModule } from 'src/modules/media/media.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: getGraphqlConfig,
      inject: [ConfigService],
    }),
    PrismaModule,
    RedisModule,
    MailModule,
    TelegramModule,
    UserModule,
    SessionsModule,
    DeactivateModule,
    QuestionsModule,
    SubjectsModule,
    AnswersModule,
    StatisticModule,
    UserVariantModule,
    TotpModule,
    PasswordRecoveryModule,
    AudioModule,
  ],
})
export class CoreModule {}
