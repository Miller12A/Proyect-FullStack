import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTeacherDto, UpdateTeacherDto } from './dto/teachers.dto';

@Injectable()
export class TeachersService {
  constructor(private prisma: PrismaService) {}

  getAllTeachers() {
    return this.prisma.profesor.findMany();
  }

  createTeachers(profesor: CreateTeacherDto) {
    return this.prisma.profesor.create({ data: profesor });
  }

  deleteTeachers(id: string) {
    return this.prisma.profesor.delete({ where: { id: Number(id) } });
  }

  getTeacherById(id: string) {
    return this.prisma.profesor.findUnique({ where: { id: Number(id) } });
  }

  updateTeachers(id: string, profesor: UpdateTeacherDto) {
    return this.prisma.profesor.update({ where: { id: Number(id) }, data: profesor });
  }
}
