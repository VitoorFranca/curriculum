import { Controller, Body, Param, Get, Post, Patch, Delete } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) { }

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  };

  @Get(':id')
  async findOne(@Param('id') id: string) {
    console.log(id);
    return await this.usersService.findOne(id);
  };

  @Post()
  async create(@Body() body) {
    return await this.usersService.create(body);
  };

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body) {
    return await this.usersService.update(id, body);
  };

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.usersService.delete(id);
  };

}
