import { Controller, Get, Param } from '@nestjs/common';
import { SwapiService } from './swapi.service';
import { Character } from './models/character.model';
import { Film } from './models/films.model';

@Controller('swapi')
export class SwapiController {
  constructor(private readonly swapiService: SwapiService) {}

  @Get('personajes/:id')
  async getCharacterById(@Param('id') id: string): Promise<Character>{
    return this.swapiService.getCharacterById(Number(id))
  }
  
  @Get('peliculas/:id')
  async getFilmById(@Param('id') id: string): Promise<Film>{
    return this.swapiService.getFilmById(Number(id))
  }

}
