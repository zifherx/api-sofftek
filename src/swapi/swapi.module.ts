import { Module } from '@nestjs/common';
import { SwapiService } from './swapi.service';
import { SwapiController } from './swapi.controller';
import { HttpModule } from '@nestjs/axios';
import { CharacterPipe } from './pipes/character.pipe';
import { FilmPipe } from './pipes';

@Module({
  imports: [HttpModule],
  controllers: [SwapiController],
  providers: [SwapiService, CharacterPipe, FilmPipe],
})
export class SwapiModule {}
