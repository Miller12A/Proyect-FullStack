import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/tasks.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  getAllTasks() {
    return this.prisma.tarea.findMany();
  }

  createTasks(task: CreateTaskDto) {
    return this.prisma.tarea.create({ data: task });
  }

  deleteTasks(id: string) {
    return this.prisma.tarea.delete({ where: { id: Number(id) } });
  }

  getTaskById(id: string) {
    return this.prisma.tarea.findUnique({ where: { id: Number(id) } });
  }

  updateTasks(id: string, task: UpdateTaskDto) {
    return this.prisma.tarea.update({ where: { id: Number(id) }, data: task });
  }
}
