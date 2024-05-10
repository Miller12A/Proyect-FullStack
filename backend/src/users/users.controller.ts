import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreatreUserDto, UpdateUserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Post()
  createUsers(@Body() newUser: CreatreUserDto) {
    return this.usersService.createUsers(newUser);
  }

  @Delete(':id')
  deleteUsers(@Param("id") id: string) {
    return this.usersService.deleteUsers(id);
  }

  @Get(':id')
  getUserById(@Param("id") id: string) {
    return this.usersService.getUserById(id);
  }

  @Patch(':id')
  updateUsers(@Param("id") id: string, @Body() updateUser: UpdateUserDto) {
    return this.usersService.updateUsers(id, updateUser)
  }

}
