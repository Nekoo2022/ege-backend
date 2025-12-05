import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateAnswerInput } from './inputs/create-answer.input';
import { IsCorrectType } from 'prisma/generated';

@Injectable()
export class AnswersService {
  constructor(private readonly prismaService: PrismaService) {}

  public async createAnswer(input: CreateAnswerInput, userId: string) {
    const { userAnswer, questionId } = input;

    const question = await this.prismaService.question.findUnique({
      where: { id: questionId },
      include: { subject: true, task: true },
    });

    if (!question) {
      throw new NotFoundException('Вопрос не найден');
    }

    const slug = question.subject.slug;

    const { partialAllowed, partialThreshold, correctAnswer } = question;

    const isCorrect = this.CheckAnswer(partialAllowed, partialThreshold, correctAnswer, userAnswer);

    console.log(userId);

    if (userId) {
      console.log('second');
      // Сохраняем текущий ответ пользователя
      await this.prismaService.userAnswer.create({
        data: {
          questionId,
          userId,
          answer: userAnswer,
          isCorrect: isCorrect,
          subjectSlug: slug,
        },
      });

      // Начисляем опыт только если ответ правильный и ранее правильного не было
      if (isCorrect === IsCorrectType.FULL) {
        await this.prismaService.user.update({
          where: { id: userId },
          data: {
            experience: { increment: question.experience! },
          },
        });
      }
    }

    return { isCorrect };
  }

  public CheckAnswer(partialAllowed: boolean, partialThreshold: number | null, correctAnswer: string[], userAnswer: string) {
    console.log('first');
    // console.log(correctAnswer, correctAnswer.length);
    if (correctAnswer.length === 0 || !correctAnswer) {
      // console.log('first');
      return IsCorrectType.NOCORRECT;
    }
    // correctAnswer = ["ABC"] → берем строку
    for (let i = 0; i < correctAnswer.length; i++) {
      const correctString = correctAnswer[i];
      const correctArray = correctString.split('');
      const userArray = userAnswer.trim().split('');

      // console.log(correctArray, userArray);
      // console.log('correctArray', correctArray);
      // console.log('userArray', userArray);

      const correctCount = userArray.filter((v, i) => correctArray[i] === v).length;

      // console.log(correctCount, correctArray);

      if (correctCount === correctArray.length) {
        return IsCorrectType.FULL;
      }

      if (partialAllowed && partialThreshold && correctCount >= partialThreshold) {
        return IsCorrectType.PARTIAL;
      }
    }

    return IsCorrectType.WRONG;
  }
}
