import {
  IsArray,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

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

  @IsOptional()
  @IsPositive()
  attack?: number;

  @IsOptional()
  @IsPositive()
  defense?: number;

  @IsString({ each: true })
  @IsArray()
  weakness: string[];

  @IsString({ each: true })
  @IsArray()
  resistance: string[];

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags: string[];

  @IsString({ each: true })
  @IsArray()
  images: string[];
}
