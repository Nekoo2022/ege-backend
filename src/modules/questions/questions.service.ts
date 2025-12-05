import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateQuestionInput } from './inputs/create-question.input';
import { FindQuestionsByTaskNumberInput } from './inputs/find-questions-by-taskNumber.input';
import { FindTaskCountInput } from './inputs/find-task-count.input';
import { FindIncorrectQuestionsInput } from './inputs/find-incorrect-question.input';
import { FindIncorrectQuestionsByTaskNumberInput } from './inputs/find-incorrect-question-by-taskNumber.input';
import { IsCorrectType } from 'prisma/generated';

@Injectable()
export class QuestionsService {
  constructor(private readonly prismaService: PrismaService) {}

  // Создание вопроса
  public async createQuestion(input: CreateQuestionInput) {
    const { text, subjectName, experience, explanation, taskNumber, correctAnswer, question } = input;

    const subject = await this.prismaService.subject.findUnique({
      where: { name: input.subjectName },
    });
    if (!subject) throw new NotFoundException('Предмет не найден');

    let task = await this.prismaService.task.findFirst({
      where: {
        taskNumber,
        subjectId: subject.id,
      },
    });

    if (!task) {
      task = await this.prismaService.task.create({
        data: {
          taskNumber,
          subjectId: subject.id,
        },
      });
    }

    await this.prismaService.question.create({
      data: {
        text: text,
        question,
        experience: experience,
        explanation: explanation,
        correctAnswer: correctAnswer,
        task: {
          connect: {
            id: task?.id,
          },
        },
        subject: {
          connect: {
            name: subjectName,
          },
        },
      },
    });

    return true;
  }

  // Подгружаем seed, если нет вопросов
  private async seedQuestionsIfEmpty(taskNumber: number, slug: string) {
    const subject = await this.prismaService.subject.findUnique({
      where: { slug },
    });
    if (!subject) {
      throw new NotFoundException('Предмет не найден');
    }

    const task = await this.prismaService.task.findFirst({
      where: {
        taskNumber,
        subjectId: subject.id,
      },
    });

    const count = await this.prismaService.question.count({
      where: {
        subjectId: subject.id,
        taskId: task?.id,
      },
    });

    return count;
  }

  // Основная логика: рандомные вопросы по предмету/номеру задания
  public async findRandomQuestions(input: FindQuestionsByTaskNumberInput) {
    const { taskNumber, slug, take } = input as { taskNumber: number; slug: string; take?: number };

    const subject = await this.prismaService.subject.findUnique({ where: { slug } });
    if (!subject) throw new NotFoundException('Предмет не найден');

    const task = await this.prismaService.task.findFirstOrThrow({
      where: { taskNumber, subjectId: subject.id },
    });

    const total = await this.prismaService.question.count({ where: { taskId: task.id, subjectId: subject.id } });
    if (total === 0) return [];

    const safeTake = Math.max(1, Math.min(take ?? total, total));
    const maxStart = Math.max(0, total - safeTake);
    const offset = maxStart > 0 ? Math.floor(Math.random() * (maxStart + 1)) : 0;

    const items = await this.prismaService.question.findMany({
      where: { taskId: task.id, subjectId: subject.id },
      skip: offset,
      take: safeTake,
      include: { task: true },
    });

    // console.log(items);

    return items;
  }

  public async findTaskCount(input: FindTaskCountInput) {
    const { slug, taskNumber } = input;

    const count = await this.prismaService.question.count({
      where: {
        subject: {
          slug,
        },
        task: {
          taskNumber,
        },
      },
    });

    return count;
  }

  public async findIncorrectQuestions(userId: string, input: FindIncorrectQuestionsInput) {
    const { slug } = input;

    const userAnswers = await this.prismaService.userAnswer.findMany({
      where: {
        userId,
        subjectSlug: slug,
      },
      include: {
        question: {
          include: {
            task: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    const latestAnswerMap = new Map<string, (typeof userAnswers)[0]>();
    for (const answer of userAnswers) {
      latestAnswerMap.set(answer.questionId, answer);
    }

    // console.log(latestAnswerMap);

    const incorrectLatestAnswers = Array.from(latestAnswerMap.values()).filter((a) => !a.isCorrect);

    const sorted = incorrectLatestAnswers.sort((a, b) => a.question.task.taskNumber - b.question.task.taskNumber);

    return sorted;
  }

  public async findIncorrectQuestionsByTaskNumber(userId: string, input: FindIncorrectQuestionsByTaskNumberInput) {
    const { slug, taskNumber } = input;

    const correctAnswers = await this.prismaService.userAnswer.findMany({
      where: {
        userId,
        isCorrect: IsCorrectType.FULL,
        subjectSlug: slug,
        question: { task: { taskNumber } },
      },
      select: { questionId: true },
    });

    const correctAnswerIds = correctAnswers.map((answer) => answer.questionId);

    const latestIncorrectAnswers = await this.prismaService.userAnswer.groupBy({
      by: ['questionId'],
      where: {
        userId,
        OR: [{ isCorrect: IsCorrectType.WRONG }, { isCorrect: IsCorrectType.PARTIAL }],
        subjectSlug: slug,
        question: { task: { taskNumber } },
        questionId: { notIn: correctAnswerIds },
      },
      _max: { createdAt: true },
    });

    const questionsIds = latestIncorrectAnswers.map((answer) => answer.questionId);

    const questions = await this.prismaService.question.findMany({
      where: {
        id: { in: questionsIds },
      },
      include: { task: true },
    });

    return questions;
  }
}
