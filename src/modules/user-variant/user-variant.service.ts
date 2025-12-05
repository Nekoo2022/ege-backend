import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateUserVariantInput } from './inputs/create-user-variant.input';

interface Question {
  variantId: number;
  questionId: string;
}

@Injectable()
export class UserVariantService {
  constructor(private readonly prismaService: PrismaService) {}

  public async createUserVariant(
    input: CreateUserVariantInput,
    userId: string,
  ) {
    const selections = input.selections;
    if (!selections.length) {
      throw new BadRequestException('Нету данных');
    }

    let userVariant = await this.prismaService.userVariant.create({
      data: {
        userId,
      },
      include: {
        questions: true,
      },
    });

    const questionToAdd: Question[] = [];

    for (const selection of selections) {
      const { taskNumber, slug, count } = selection;
      const excludedIds = userVariant.questions.map((q) => q.questionId);

      const availableQuestions = await this.prismaService.question.findMany({
        where: {
          subject: { slug },
          task: { taskNumber },
          id: { notIn: excludedIds.length ? excludedIds : ['0'] },
        },
        include: { task: true },
      });

      if (!availableQuestions.length) continue;

      const shuffled = availableQuestions.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, Math.min(count, shuffled.length));

      for (const question of selected) {
        questionToAdd.push({
          variantId: userVariant.id,
          questionId: question.id,
        });
        excludedIds.push(question.id);
      }
    }

    if (questionToAdd.length > 0) {
      await this.prismaService.userVariantQuestion.createMany({
        data: questionToAdd,
        skipDuplicates: true,
      });
    }

    await this.prismaService.userVariant.findUnique({
      where: {
        id: userVariant.id,
      },
      include: {
        questions: {
          include: {
            question: {
              include: {
                task: true,
              },
            },
          },
        },
      },
    });

    return userVariant.id;
  }

  public async findUserVariantAll(userId: string) {
    const variants = await this.prismaService.userVariant.findMany({
      where: { userId },
      include: {
        questions: {
          include: {
            question: {
              include: {
                task: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!variants) {
      throw new NotFoundException('Варианты не найдены');
    }

    return variants.map((variant) => ({
      ...variant,
      questions: variant.questions.map((uvq) => ({
        ...uvq.question,
        task: uvq.question.task,
      })),
    }));
  }

  public async findUserVariantById(variantId: number) {
    const variant = await this.prismaService.userVariant.findUnique({
      where: { id: variantId },
      include: {
        questions: {
          include: {
            question: {
              include: {
                task: true,
              },
            },
          },
        },
      },
    });

    if (!variant) return null;

    return {
      ...variant,
      questions: variant.questions.map((uvq) => {
        const { question } = uvq;
        return {
          ...question,
          task: question.task,
        };
      }),
    };
  }

  public async removeUserVariantById(variantId: number) {
    const variant = await this.prismaService.userVariant.findUnique({
      where: { id: variantId },
    });

    if (!variant) {
      throw new NotFoundException('Вариант не найден');
    }

    await this.prismaService.userVariantQuestion.deleteMany({
      where: { variantId },
    });

    await this.prismaService.userVariant.delete({
      where: { id: variantId },
    });

    return true;
  }
}
