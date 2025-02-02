import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.servicer';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    const usersService = new UsersService();
    return usersService.getAllUsers();
  }

  // id and name are mendatory but gender is optional
  @Get(':id/:name/:gender')
  getUserById(@Query('id') id: number, @Query('name') name: string, @Query('gender') gender?: string) {
    const usersService = new UsersService();
    return 'User Found';
  }

  @Post()
  createUsers() {
    const usersService = new UsersService();
    usersService.createUser({
      id: 6,
      name: 'Jen',
      age: 30,
      gender: 'female',
      isMarried: true,
    });
    return 'User Created Successfully';
  }
}
