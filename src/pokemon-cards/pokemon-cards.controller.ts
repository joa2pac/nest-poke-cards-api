import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { PokemonCardsService } from './pokemon-cards.service';
import { CreatePokemonCardDto } from './dto/create-pokemon-card.dto';
import { UpdatePokemonCardDto } from './dto/update-pokemon-card.dto';

@Controller('pokemon-card')
export class PokemonCardsController {
  constructor(private readonly pokemonCardsService: PokemonCardsService) {}

  @Post()
  create(@Body() createPokemonCardDto: CreatePokemonCardDto) {
    return this.pokemonCardsService.create(createPokemonCardDto);
  }

  @Get()
  findAll() {
    return this.pokemonCardsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.pokemonCardsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePokemonCardDto: UpdatePokemonCardDto,
  ) {
    return this.pokemonCardsService.update(+id, updatePokemonCardDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.pokemonCardsService.remove(id);
  }
}
