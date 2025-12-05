import { Args, Query, Resolver } from '@nestjs/graphql';
import { StatisticService } from './statistic.service';
import { Authorization } from 'src/shared/decorators/auth.decorator';
import { Authorized } from 'src/shared/decorators/authorized.decorator';
import { SubjectsStatisticModel } from './models/subjects-statistic.model';
import { TasksStatisticModel } from './models/tasks-statistic.model';
import { GetTasksStatisticInput } from './inputs/get-tasks-statistic.input';
import { GetAllStatisticModel } from './models/get-all-statistic.model';

@Resolver('Statistic')
export class StatisticResolver {
  constructor(private readonly statisticService: StatisticService) {}

  @Authorization()
  @Query(() => GetAllStatisticModel, { name: 'GetAllStatistic' })
  public async getAllStatistic(@Authorized('id') userId: string) {
    return this.statisticService.getAllStatistic(userId);
  }

  @Authorization()
  @Query(() => [SubjectsStatisticModel], { name: 'GetSubjectsStatistic' })
  public async getSubjectsStatistic(@Authorized('id') userId: string) {
    return this.statisticService.getSubjectsStatistic(userId);
  }

  @Authorization()
  @Query(() => [TasksStatisticModel], { name: 'GetTasksStatistic' })
  public async getTasksStatistic(
    @Authorized('id') userId: string,
    @Args('data') input: GetTasksStatisticInput,
  ) {
    return this.statisticService.getTasksStatistic(userId, input);
  }
}
