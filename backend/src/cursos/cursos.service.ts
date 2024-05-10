import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCursoDto, UpdateCursoDto } from './dto/cursos.dto';

@Injectable()
export class CursosService {
  constructor(private prisma: PrismaService) {}

  getAllCursos() {
    return this.prisma.curso.findMany();
  }

  createCurso(curso: CreateCursoDto) {
    return this.prisma.curso.create({ data: curso });
  }

  deleteCurso(id: string) {
    return this.prisma.curso.delete({ where: { id: Number(id) } });
  }

  getCursoById(id: string) {
    return this.prisma.curso.findUnique({ where: { id: Number(id) } });
  }

  updateCurso(id: string, curso: UpdateCursoDto) {
    return this.prisma.curso.update({ where: { id: Number(id) }, data: curso });
  }
}
