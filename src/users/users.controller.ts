import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUserDto';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async create(@Body() create: CreateUserDto) {
    const id = await this.usersService.createOneUser(
      create.name,
      create.surname,
      create.email,
      create.password,
    );

    return id;
  }
}
