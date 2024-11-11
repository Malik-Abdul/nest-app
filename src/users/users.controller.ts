import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

  @Get() // GET /users or /users?role=Admin&age=39
  findAll(
    @Query('role') role?: 'Admin' | 'Engineer' | 'Intern',
    @Query('age') age?: number,
  ) {
    return this.UsersService.findAll(role, age);
  }

  @Get('interns') // GET users/interns
  findAllInterns() {
    return this.UsersService.findAllInterns();
  }

  //   users/interns this is static route and will be always before the dynamic routes
  //   otherwise the the static route couldnot be read and dynamic route will be read

  @Get(':id') // GET user/:id
  findOne(@Param('id') id: number) {
    // return { id };
    return this.UsersService.findOne(id);
  }

  @Post() // POST users
  create(@Body() user: User) {
    return this.UsersService.create(user);
  }

  @Patch(':id') // Patch user/:id
  update(@Param('id') id: number, @Body() userUpdate: User) {
    // return { id, ...userUpdate };
    return this.UsersService.update(id, userUpdate);
  }

  @Delete(':id') // Delete user/:id
  delete(@Param('id') id: number) {
    // return { message: `User ${id}: Deleted` };
    return this.UsersService.delete(id);
  }
}
