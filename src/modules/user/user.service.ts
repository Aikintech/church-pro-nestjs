import { Injectable } from '@nestjs/common';
import { CreateUser } from 'src/types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return [];
  }

  async findByEmail(email: string) {
    return null;
  }

  async findByPhone(phone: string) {
    return null;
  }

  async createUser(data: CreateUser) {}
}
