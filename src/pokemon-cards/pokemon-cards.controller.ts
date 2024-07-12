import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { PokemonCardsService } from './pokemon-cards.service';
import { CreatePokemonCardDto } from './dto/create-pokemon-card.dto';
import { UpdatePokemonCardDto } from './dto/update-pokemon-card.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('pokemon-card')
export class PokemonCardsController {
  constructor(private readonly pokemonCardsService: PokemonCardsService) {}

  @Post()
  create(@Body() createPokemonCardDto: CreatePokemonCardDto) {
    return this.pokemonCardsService.create(createPokemonCardDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.pokemonCardsService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.pokemonCardsService.findOne(term);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePokemonCardDto: UpdatePokemonCardDto,
  ) {
    return this.pokemonCardsService.update(id, updatePokemonCardDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.pokemonCardsService.remove(id);
  }
}
