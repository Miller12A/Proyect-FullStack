import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [TasksService, PrismaService],
  controllers: [TasksController,]
})
export class TasksModule {}
