import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto, UpdateStudentDto } from './dto/students.dto';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  getAllStudents() {
    return this.studentsService.getAllStudents();
  }

  @Post()
  createStudents(@Body() newStudent: CreateStudentDto) {
    return this.studentsService.createStudents(newStudent);
  }

  @Delete(':id')
  deleteStudents(@Param("id") id: string) {
    return this.studentsService.deleteStudents(id);
  }

  @Get(':id')
  getStudentById(@Param("id") id: string) {
    return this.studentsService.getStudentById(id);
  }

  @Patch(':id')
  updateStudents(@Param("id") id: string, @Body() updateStudent: UpdateStudentDto) {
    return this.studentsService.updateStudents(id, updateStudent)
  }
}
