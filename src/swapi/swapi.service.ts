import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CharacterPipe } from './pipes/character.pipe';
import { FilmPipe } from './pipes';

@Injectable()
export class SwapiService {

  constructor(
    private httpService: HttpService, 
    private characterPipe: CharacterPipe,
    private filmPipie: FilmPipe
  ){}

  async getCharacterById(id: number) {
    const response = await firstValueFrom(this.httpService.get(`https://swapi.py4e.com/api/people/${id}`))

    return this.characterPipe.transform(response.data, null)
  }

  async getFilmById(id: number) {
    const response = await firstValueFrom(this.httpService.get(`https://swapi.py4e.com/api/films/${id}`))

    return this.filmPipie.transform(response.data, null)
  }

}
