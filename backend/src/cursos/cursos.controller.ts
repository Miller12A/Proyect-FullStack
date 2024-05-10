import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/cursos.dto';

@Controller('cursos')
export class CursosController {
  constructor(private cursosService: CursosService) {}

  @Get()
  getAllCursos() {
    return this.cursosService.getAllCursos();
  }

  @Post()
  createCurso(@Body() newCurso: CreateCursoDto) {
    return this.cursosService.createCurso(newCurso);
  }

  @Delete(':id')
  deleteCurso(@Param("id") id: string) {
    return this.cursosService.deleteCurso(id);
  }

  @Get(':id')
  getCursoById(@Param("id") id: string) {
    return this.cursosService.getCursoById(id);
  } 

  @Patch(':id')
  updateCurso(@Param("id") id: string, @Body() updateCurso: CreateCursoDto) {
    return this.cursosService.updateCurso(id, updateCurso)
  }
}
