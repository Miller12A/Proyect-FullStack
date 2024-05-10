import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatreUserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getAllUsers() {
    return this.prisma.usuario.findMany();
  }

  createUsers(usuario: CreatreUserDto) {
    return this.prisma.usuario.create({ data: usuario });
  }

  deleteUsers(id: string) {
    return this.prisma.usuario.delete({ where: { id: Number(id) } });
  }

  getUserById(id: string) {
    return this.prisma.usuario.findUnique({ where: { id: Number(id) } });
  }

  updateUsers(id: string, usuario: CreatreUserDto) {
    return this.prisma.usuario.update({ where: { id: Number(id) }, data: usuario });
  }
}
