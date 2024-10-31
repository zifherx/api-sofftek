import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const newObj = await this.usersService.create(createUserDto);

    if (newObj)
      return {
        message: `Usuario creado con éxito`,
        obj: newObj,
      };
  }

  @Get()
  async findAll() {
    return {
      total: (await this.usersService.findAll()).length,
      all: await this.usersService.findAll(),
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return (await this.usersService.remove(id))
      ? { success: true, message: `Usuario ${id} eliminado` }
      : { success: false, message: `Usuario ${id} no existe` };
  }
}
