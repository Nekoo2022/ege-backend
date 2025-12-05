import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { QuestionsService } from './questions.service';
import { CreateQuestionInput } from './inputs/create-question.input';
import { QuestionModel } from './models/question.model';
import { Authorization } from 'src/shared/decorators/auth.decorator';
import { Authorized } from 'src/shared/decorators/authorized.decorator';
import { FindTaskCountInput } from './inputs/find-task-count.input';
import { FindIncorrectQuestionsModel } from './models/find-incorrect-questions-model';
import { FindIncorrectQuestionsInput } from './inputs/find-incorrect-question.input';
import { FindQuestionsByTaskNumberInput } from './inputs/find-questions-by-taskNumber.input';
import { FindIncorrectQuestionsByTaskNumberInput } from './inputs/find-incorrect-question-by-taskNumber.input';

@Resolver('Question')
export class QuestionsResolver {
  constructor(private readonly questionsService: QuestionsService) {}

  @Mutation(() => Boolean, { name: 'CreateQuestion' })
  public async createQuestion(@Args('data') input: CreateQuestionInput) {
    return this.questionsService.createQuestion(input);
  }

  @Query(() => [QuestionModel], { name: 'FindRandomQuestions' })
  public async findRandomQuestions(@Args('data') input: FindQuestionsByTaskNumberInput) {
    return this.questionsService.findRandomQuestions(input);
  }

  @Query(() => Number, { name: 'FindTaskCount' })
  public async findTaskCount(@Args('data') input: FindTaskCountInput) {
    return this.questionsService.findTaskCount(input);
  }

  @Authorization()
  @Query(() => [FindIncorrectQuestionsModel], {
    name: 'FindIncorrectQuestions',
  })
  public async findIncorrectQuestions(@Authorized('id') userId: string, @Args('data') input: FindIncorrectQuestionsInput) {
    return this.questionsService.findIncorrectQuestions(userId, input);
  }

  @Authorization()
  @Query(() => [QuestionModel], {
    name: 'FindIncorrectQuestionsByTaskNumber',
  })
  public async findIncorrectQuestionsByTaskNumber(
    @Authorized('id') userId: string,
    @Args('data') input: FindIncorrectQuestionsByTaskNumberInput,
  ) {
    return this.questionsService.findIncorrectQuestionsByTaskNumber(userId, input);
  }
}
