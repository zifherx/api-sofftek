import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { Film } from '../models/films.model';


@Injectable()
export class FilmPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): Film {
    return new Film(
      value.title,
      value.episode_id,
      value.opening_crawl,
      value.director,
      value.producer,
      value.release_date,
      value.species,
      value.starships,
      value.vehicles,
      value.characters,
      value.planets,
      value.created,
      value.edited,
      value.url
    );
  }
}
