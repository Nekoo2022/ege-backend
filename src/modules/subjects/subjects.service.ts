import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateSubjectInput } from './inputs/create-subject.input';
import { FindSubjectBySlugInput } from './inputs/find-subject-by-slug.input';
import { ToggleFavoriteSubjectInput } from './inputs/toggle-favorite-subject-input';

@Injectable()
export class SubjectsService {
  constructor(private readonly prismaService: PrismaService) {}

  public async createSubject(input: CreateSubjectInput) {
    const { name, slug } = input;
    await this.prismaService.subject.create({
      data: { name, slug },
    });

    return true;
  }

  public async findAllSubjects() {
    // include _count обязательно, questions можно убрать если не нужен массив вопросов
    const subjects = await this.prismaService.subject.findMany({
      include: {
        _count: {
          select: { questions: true },
        },
      },
    });

    if (!subjects || subjects.length === 0) {
      throw new NotFoundException('Предметы не найдены');
    }

    // Преобразуем _count.questions в questionCount прямо здесь
    return subjects.map((subject) => ({
      ...subject,
      questionCount: subject._count?.questions ?? 0,
    }));
  }

  public async findSubjectBySlug(slug: string) {
    const subject = await this.prismaService.subject.findUnique({
      where: { slug },
    });

    if (!subject) {
      throw new NotFoundException('Предмет не найден');
    }

    const tasks = await this.prismaService.task.findMany({
      where: {
        subjectId: subject.id,
      },
      orderBy: {
        taskNumber: 'asc',
      },
    });

    if (!tasks) {
      throw new NotFoundException('Задания не найдены');
    }

    return tasks;
  }

  public async toggleFavoriteSubject(
    input: ToggleFavoriteSubjectInput,
    userId: string,
  ) {
    const { slug } = input;

    const subject = await this.prismaService.subject.findFirst({
      where: {
        slug,
      },
    });

    if (!subject) {
      throw new NotFoundException('Предмет не найден');
    }

    const user = await this.prismaService.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        favoriteSubjects: true,
      },
    });

    const isFavorite = user?.favoriteSubjects.some(
      (favoriteSubject) => favoriteSubject.id === subject.id,
    );

    const updateData = isFavorite
      ? { disconnect: { id: subject.id } }
      : { connect: { id: subject.id } };

    await this.prismaService.user.update({
      where: {
        id: userId,
      },
      data: {
        favoriteSubjects: updateData,
      },
    });

    return true;
  }

  public async findFavoriteSubjects(userId: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        favoriteSubjects: {
          include: {
            tasks: true,
          },
        },
      },
    });

    return user?.favoriteSubjects;
  }
}
