import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/tasks.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTasks(@Body() newTask: CreateTaskDto) {
    return this.tasksService.createTasks(newTask);
  }

  @Delete(':id')
  deleteTasks(@Param("id") id: string) {
    return this.tasksService.deleteTasks(id);
  }

  @Get(':id')
  getTaskById(@Param("id") id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Patch(':id')
  updateTasks(@Param("id") id: string, @Body() updateTask: UpdateTaskDto) {
    return this.tasksService.updateTasks(id, updateTask)
  }
}
