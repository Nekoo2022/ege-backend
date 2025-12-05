import { Prisma, PrismaClient } from '../../../prisma/generated';
import { BadRequestException, Logger, NotFoundException } from '@nestjs/common';
import { hash } from 'argon2';
import { SUBJECTS } from './data/subjects';
import { USERS } from './data/users';
import { QUESTIONSDATA } from './data/questions-data';
import { QUESTIONSDATA2 } from './data/questions-data-2';
import { QUESTIONSDATA3 } from './data/questions-data-3';

const prisma = new PrismaClient({
  transactionOptions: {
    maxWait: 5000,
    timeout: 10000,
    isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
  },
});

async function main() {
  try {
    Logger.log('Начало заполнения базы данных');

    await prisma.$transaction([
      prisma.userAnswer.deleteMany(),
      prisma.question.deleteMany(),
      prisma.task.deleteMany(),
      prisma.subject.deleteMany(),
      prisma.user.deleteMany(),
    ]);

    Logger.log('Данные успешно очищены');

    await prisma.subject.createMany({
      data: SUBJECTS,
    });

    Logger.log('Предметы успешно созданы');

    await Promise.all(
      USERS.map(async (user) => {
        await prisma.user.create({
          data: { ...user, password: await hash(user.password) },
        });
      }),
    );

    Logger.log('Пользователи успешно созданы');

    await prisma.$transaction(async (tx) => {
      for (const question of QUESTIONSDATA) {
        const { subjectName, taskNumber, task: taskByJson, type } = question;

        // if (type) {
        //   console.log(type);
        // }

        const subject = await tx.subject.findFirst({
          where: {
            name: subjectName,
          },
        });

        if (!subject) {
          throw new NotFoundException('Предмет не найден');
        }

        let task = await tx.task.findFirst({
          where: {
            taskNumber,
            subjectId: subject.id,
          },
        });

        if (!task) {
          task = await tx.task.create({
            data: {
              taskNumber,
              subjectId: subject.id,
            },
          });
        }

        // if (question.taskNumber === 1 && subjectName === 'physic') {
        //   console.log(question.images);
        // }

        await tx.question.create({
          data: {
            subjectId: subject.id,
            taskId: task.id,
            text: question.text || '', // пустое для аудио
            question: taskByJson ? taskByJson : question.question || '', // пустое
            experience: question.experience || 0,
            correctAnswer: question.correctAnswer || [],
            explanation: question.explanation || null,
            audioPath: question.audioPath || null,
            intro: question.intro || null,
            statements: question.statements ?? Prisma.JsonNull,
            tableSpec: question.tableSpec ?? Prisma.JsonNull,
            type: question.type || 'text',
            partialAllowed: question.partialAllowed,
            partialThreshold: question.partialThreshold || null,
            subQuestions: question.subQuestions ?? Prisma.JsonNull,
            images: question.images || [],
            explanationImages: question.explanationImages || [],
            globalImages: question.globalImages || [],
            hasCorrectAnswer: question.hasCorrectAnswer !== false,
          },
        });

        await tx.task.update({
          where: {
            id: task.id,
          },
          data: {
            questionsCount: {
              increment: 1,
            },
          },
        });
      }
    });

    await prisma.$transaction(async (tx) => {
      for (const question of QUESTIONSDATA2) {
        const { subjectName, taskNumber, task: taskByJson, type } = question;

        // if (type) {
        //   console.log(type);
        // }

        const subject = await tx.subject.findFirst({
          where: {
            name: subjectName,
          },
        });

        if (!subject) {
          throw new NotFoundException('Предмет не найден');
        }

        let task = await tx.task.findFirst({
          where: {
            taskNumber,
            subjectId: subject.id,
          },
        });

        if (!task) {
          task = await tx.task.create({
            data: {
              taskNumber,
              subjectId: subject.id,
            },
          });
        }

        // if (question.taskNumber === 1 && subjectName === 'physic') {
        //   console.log(question.images);
        // }

        await tx.question.create({
          data: {
            subjectId: subject.id,
            taskId: task.id,
            text: question.text || '', // пустое для аудио
            question: taskByJson || '', // пустое
            experience: question.experience || 0,
            correctAnswer: question.correctAnswer || [],
            explanation: question.explanation || null,
            // audioPath: question.audioPath || null,
            // intro: question.intro || null,
            statements: question.statements ?? Prisma.JsonNull,
            tableSpec: question.tableSpec ?? Prisma.JsonNull,
            type: question.type || 'text',
            // partialAllowed: question.partialAllowed,
            // partialThreshold: question.partialThreshold || null,
            // subQuestions: question.subQuestions ?? Prisma.JsonNull,
            // images: question.images || [],
            // explanationImages: question.explanationImages || [],
            // globalImages: question.globalImages || [],
            hasCorrectAnswer: question.hasCorrectAnswer !== false,
          },
        });

        await tx.task.update({
          where: {
            id: task.id,
          },
          data: {
            questionsCount: {
              increment: 1,
            },
          },
        });
      }
    });

    await prisma.$transaction(async (tx) => {
      for (const question of QUESTIONSDATA3) {
        const { subjectName, taskNumber, task: taskByJson, type } = question;

        // if (type) {
        //   console.log(type);
        // }

        const subject = await tx.subject.findFirst({
          where: {
            name: subjectName,
          },
        });

        if (!subject) {
          throw new NotFoundException('Предмет не найден');
        }

        let task = await tx.task.findFirst({
          where: {
            taskNumber,
            subjectId: subject.id,
          },
        });

        if (!task) {
          task = await tx.task.create({
            data: {
              taskNumber,
              subjectId: subject.id,
            },
          });
        }

        // if (question.taskNumber === 1 && subjectName === 'physic') {
        //   console.log(question.images);
        // }

        await tx.question.create({
          data: {
            subjectId: subject.id,
            taskId: task.id,
            text: question.text || '', // пустое для аудио
            question: taskByJson || '', // пустое
            experience: question.experience || 0,
            correctAnswer: question.correctAnswer || [],
            explanation: question.explanation || null,
            // audioPath: question.audioPath || null,
            // intro: question.intro || null,
            statements: question.statements ?? Prisma.JsonNull,
            tableSpec: question.tableSpec ?? Prisma.JsonNull,
            type: question.type || 'text',
            // partialAllowed: question.partialAllowed,
            // partialThreshold: question.partialThreshold || null,
            // subQuestions: question.subQuestions ?? Prisma.JsonNull,
            // images: question.images || [],
            // explanationImages: question.explanationImages || [],
            globalImages: question.globalImages || [],
            // hasCorrectAnswer: question.hasCorrectAnswer !== false,
          },
        });

        await tx.task.update({
          where: {
            id: task.id,
          },
          data: {
            questionsCount: {
              increment: 1,
            },
          },
        });
      }
    });

    Logger.log(`Вопросы успешно созданы`);

    Logger.log('Подсчёт количества вопросов для каждого предмета...');

    const subjects = await prisma.subject.findMany();

    for (const subject of subjects) {
      const questionsCount = await prisma.question.count({
        where: { subjectId: subject.id },
      });

      await prisma.subject.update({
        where: { id: subject.id },
        data: { questionsCount }, // поле должно существовать в модели Subject
      });
    }

    Logger.log('Количество вопросов для каждого предмета обновлено');

    Logger.log(`Заполнение базы данных прошло успешно`);
  } catch (error) {
    Logger.error(error);
    throw new BadRequestException('Ошибка при заполнении базы данных');
  } finally {
    Logger.log('Закрытие соединения с базой данных...');
    await prisma.$disconnect();
    Logger.log('Соединение с базой данных успешно закрыто');
  }
}

main();
