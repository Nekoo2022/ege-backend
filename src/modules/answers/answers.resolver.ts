import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AnswersService } from './answers.service';
import { CreateAnswerInput } from './inputs/create-answer.input';
import { Authorized } from 'src/shared/decorators/authorized.decorator';
import { CreateAnswerModel } from './models/create-answer.model';

@Resolver('Answer')
export class AnswersResolver {
  constructor(private readonly answersService: AnswersService) {}

  @Mutation(() => CreateAnswerModel, { name: 'CreateAnswer' })
  public async createAnswer(@Args('data') input: CreateAnswerInput, @Authorized('id') userId: string) {
    return this.answersService.createAnswer(input, userId);
  }
}
