import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MateriasService {
  constructor(private prisma: PrismaService) {}

  getAllMaterias() {
    return this.prisma.materia.findMany();
  }

  createMaterias(materia: any) {
    return this.prisma.materia.create({ data: materia });
  }

  deleteMaterias(id: string) {
    return this.prisma.materia.delete({ where: { id: Number(id) } });
  }

  getMateriasById(id: string) {
    return this.prisma.materia.findUnique({ where: { id: Number(id) } });
  }

  updateMaterias(id: string, materia: any) {
    return this.prisma.materia.update({ where: { id: Number(id) }, data: materia });
  }
}
