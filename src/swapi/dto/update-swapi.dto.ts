import { PartialType } from '@nestjs/mapped-types';
import { CreateSwapiDto } from './create-swapi.dto';

export class UpdateSwapiDto extends PartialType(CreateSwapiDto) {}
