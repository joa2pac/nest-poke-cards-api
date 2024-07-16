import {
  IsArray,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';
import { CreateAttackDto, CreateWeaknessDto, CreateResistancesDto } from './';

export class CreatePokemonCardDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  @MinLength(3)
  description?: string;

  @IsString()
  @MinLength(3)
  type: string;

  @IsOptional()
  @IsPositive()
  hp?: number;

  @IsString({ each: true })
  @IsArray()
  images: string[];

  @IsArray()
  attacks: CreateAttackDto[];

  @IsArray()
  weakness: CreateWeaknessDto[];

  @IsArray()
  resistances: CreateResistancesDto[];
}
