import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MateriasService } from './materias.service';
import { CreateMateriaDto } from './dto/materias.dto';

@Controller('materias')
export class MateriasController {
  constructor(private materiasService: MateriasService) {}

  @Get()
  getAllMaterias() {
    return this.materiasService.getAllMaterias();
  }

  @Post()
  createMaterias(@Body() newMateria: CreateMateriaDto) {
    return this.materiasService.createMaterias(newMateria);
  }

  @Delete(':id')
  deleteMaterias(@Param("id") id: string) {
    return this.materiasService.deleteMaterias(id);
  }

  @Get(':id')
  getMateriaById(@Param("id") id: string) {
    return this.materiasService.getMateriasById(id);
  }

  @Patch(':id')
  updateMaterias(@Param("id") id: string, @Body() updateMateria: CreateMateriaDto) {
    return this.materiasService.updateMaterias(id, updateMateria)
  }
}
