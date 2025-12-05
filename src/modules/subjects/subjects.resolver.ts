import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubjectsService } from './subjects.service';
import { CreateSubjectInput } from './inputs/create-subject.input';
import { SubjectModel } from './models/subject.model';
import { TaskModel } from './models/task.model';
import { ToggleFavoriteSubjectInput } from './inputs/toggle-favorite-subject-input';
import { Authorization } from 'src/shared/decorators/auth.decorator';
import { Authorized } from 'src/shared/decorators/authorized.decorator';

@Resolver('Subject')
export class SubjectsResolver {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Mutation(() => Boolean, { name: 'CreateSubject' })
  public async createSubject(@Args('data') input: CreateSubjectInput) {
    return this.subjectsService.createSubject(input);
  }

  @Query(() => [SubjectModel], { name: 'FindAllSubjects' })
  public async findAllSubjects() {
    return this.subjectsService.findAllSubjects();
  }

  @Query(() => [TaskModel], { name: 'FindSubjectBySlug' })
  public async findSubjectBySlug(@Args('slug') slug: string) {
    return this.subjectsService.findSubjectBySlug(slug);
  }

  @Authorization()
  @Mutation(() => Boolean, { name: 'ToggleFavoriteSubject' })
  public async toggleFavoriteSubject(
    @Args('data') input: ToggleFavoriteSubjectInput,
    @Authorized('id') userId: string,
  ) {
    return this.subjectsService.toggleFavoriteSubject(input, userId);
  }

  @Authorization()
  @Query(() => [SubjectModel], { name: 'FindFavoriteSubjects' })
  public async findFavoriteSubjects(@Authorized('id') userId: string) {
    return this.subjectsService.findFavoriteSubjects(userId);
  }
}
