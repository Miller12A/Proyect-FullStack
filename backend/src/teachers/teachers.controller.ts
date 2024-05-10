import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto, UpdateTeacherDto } from './dto/teachers.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private teachersService: TeachersService) {}

  @Get()
  getAllTeachers() {
    return this.teachersService.getAllTeachers();
  }

  @Post()
  createTeachers(@Body() newTeacher: CreateTeacherDto) {
    return this.teachersService.createTeachers(newTeacher);
  }

  @Delete(':id')
  deleteTeachers(@Param("id") id: string) {
    return this.teachersService.deleteTeachers(id);
  }

  @Get(':id')
  getTeacherById(@Param("id") id: string) {
    return this.teachersService.getTeacherById(id);
  }

  @Patch(':id')
  updateTeachers(@Param("id") id: string, @Body() updateTeacher: UpdateTeacherDto) {
    return this.teachersService.updateTeachers(id, updateTeacher)
  }
}
