import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateStudentDto, UpdateStudentDto } from './dto/students.dto';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  getAllStudents() {
    return this.prisma.alumno.findMany();
  }

  createStudents(student: CreateStudentDto) {
    return this.prisma.alumno.create({ data: student });
  }

  deleteStudents(id: string) {
    return this.prisma.alumno.delete({ where: { id: Number(id) } });
  }

  getStudentById(id: string) {
    return this.prisma.alumno.findUnique({ where: { id: Number(id) } });
  }

  updateStudents(id: string, student: UpdateStudentDto) {
    return this.prisma.alumno.update({ where: { id: Number(id) }, data: student });
  }
}
