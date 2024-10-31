import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { Character } from 'src/swapi/models/character.model';


@Injectable()
export class CharacterPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): Character {
    return new Character(
      value.name,
      value.height,
      value.mass,
      value.skin_color,
      value.hair_color,
      value.eye_color,
      value.birth_year,
      value.gender,
      value.homeworld,
      value.films,
      value.starships,
      value.vehicles,
      value.species,
      value.created,
      value.edited,
      value.url,
    );
  }
}
