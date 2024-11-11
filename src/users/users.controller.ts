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

@Controller('users')
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

  @Get() // GET /users or /users?role=Admin&age=39
  findAll(@Query('role') role?: 'Admin' | 'Engineer' | 'Intern') {
    return [];
  }

  @Get('interns') // GET users/interns
  findAllInterns() {
    return [];
  }

  //   users/interns this is static route and will be always before the dynamic routes
  //   otherwise the the static route couldnot be read and dynamic route will be read

  @Get(':id') // GET user/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // Patch user/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // Delete user/:id
  delete(@Param('id') id: string) {
    return { message: `User ${id}: Deleted` };
  }
}
