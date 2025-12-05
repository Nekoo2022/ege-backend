import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateUserInput } from './inputs/create-user.input';
import { hash, verify } from 'argon2';
import { ChangePasswordInput } from './inputs/change-password.input';
import { RedisService } from 'src/core/redis/redis.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly redisService: RedisService,
    private readonly configService: ConfigService,
  ) {}

  public async findAllUsers() {
    return this.prismaService.user.findMany();
  }

  public async createUser(input: CreateUserInput) {
    const { email, password } = input;

    const isEmailExist = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    });

    if (isEmailExist) {
      throw new ConflictException('Пользователь с такой почтой уже существует');
    }

    await this.prismaService.user.create({
      data: {
        email,
        password: await hash(password),
      },
    });

    return true;
  }

  public async findMe(userId: string | null) {
    // console.log(userId);
    if (!userId) {
      return { isAuth: false };
    }
    const user = await this.prismaService.user.findFirst({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    return { isAuth: true, user };
  }

  public async changeEmail(id: string, email: string) {
    const user = await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        email,
      },
    });

    return true;
  }

  public async changePassword(id: string, input: ChangePasswordInput) {
    const { oldPassword, newPassword } = input;
    const user = await this.prismaService.user.findFirst({
      where: {
        id,
      },
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }

    const isValidPassword = verify(user.password, oldPassword);

    if (!isValidPassword) {
      throw new BadRequestException('Неверный старый пароль');
    }

    await this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        password: newPassword,
      },
    });

    return true;
  }
}
