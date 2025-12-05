import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { GetTasksStatisticInput } from './inputs/get-tasks-statistic.input';
import { TasksStatisticModel } from './models/tasks-statistic.model';
import { IsCorrectType } from 'prisma/generated';

@Injectable()
export class StatisticService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getAllStatistic(userId: string) {
    const totalAnswer = await this.prismaService.userAnswer.count({
      where: {
        userId,
      },
    });

    const totalCorrectAnswer = await this.prismaService.userAnswer.count({
      where: {
        userId,
        isCorrect: IsCorrectType.FULL,
      },
    });

    if (totalCorrectAnswer === 0) {
      return {
        totalAnswer,
        totalCorrectAnswer,
        correctPercent: 0,
      };
    }

    const correctPercent = Math.round((totalCorrectAnswer / totalAnswer) * 100);

    return {
      totalAnswer,
      totalCorrectAnswer,
      correctPercent,
    };
  }

  public async getSubjectsStatistic(userId: string) {
    const stats = await this.prismaService.$queryRaw<
      {
        subjectId: string;
        subjectName: string;
        subjectSlug: string;
        totalQuestions: number;
        answered: number;
        correct: number;
      }[]
    >`
  SELECT 
    s.id AS "subjectId",
    s.name AS "subjectName",
    s.slug AS "subjectSlug",
    s."questionsCount" AS "totalQuestions",
    COUNT(ua.id) AS "answered",
    SUM(CASE WHEN ua."isCorrect" THEN 1 ELSE 0 END) AS "correct"
  FROM "user_answers" ua
  JOIN "questions" q ON ua."questionId" = q.id
  JOIN "subjects" s ON q."subjectId" = s.id
  WHERE ua."userId" = ${userId}
  GROUP BY s.id, s.name, s.slug, s."questionsCount"
`;

    return stats.map((item) => ({
      subjectName: item.subjectName,
      subjectSlug: item.subjectSlug,
      totalQuestions: item.totalQuestions,
      answered: Number(item.answered),
      correct: Number(item.correct),
      correctPercent: item.answered > 0 ? Math.floor((Number(item.correct) / Number(item.answered)) * 100) : 0,
    }));
  }

  public async getTasksStatistic(userId: string, input: GetTasksStatisticInput) {
    const { subjectSlug } = input;

    // Получаем предмет с количеством заданий
    const subject = await this.prismaService.subject.findUnique({
      where: { slug: subjectSlug },
      select: { tasksCount: true },
    });

    if (!subject) return [];

    // Получаем все задания, которые есть в базе
    const tasks = await this.prismaService.task.findMany({
      where: { subject: { slug: subjectSlug } },
      include: {
        questions: {
          include: { answers: { where: { userId } } },
        },
      },
    });

    // Создаём Map для быстрого поиска по taskNumber
    const tasksMap = new Map(tasks.map((t) => [t.taskNumber, t]));

    const result: TasksStatisticModel[] = [];

    for (let i = 1; i <= subject.tasksCount; i++) {
      const task = tasksMap.get(i);

      if (!task) {
        result.push({
          taskNumber: i,
          totalQuestions: 0,
          answered: 0,
          correct: 0,
          correctPercent: 0,
        });
        continue;
      }

      let answered = 0;
      let correct = 0;

      for (const q of task.questions) {
        for (const a of q.answers) {
          answered += 1;
          if (a.isCorrect) correct += 1;
        }
      }

      result.push({
        taskNumber: task.taskNumber,
        totalQuestions: task.questions.length,
        answered,
        correct,
        correctPercent: Math.floor(answered > 0 ? (correct / answered) * 100 : 0),
      });
    }

    return result;
  }
}
