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
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';

@Controller('pokemon-card')
@Auth()
export class PokemonCardsController {
  constructor(private readonly pokemonCardsService: PokemonCardsService) {}

  @Post()
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  create(@Body() createPokemonCardDto: CreatePokemonCardDto) {
    return this.pokemonCardsService.create(createPokemonCardDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.pokemonCardsService.findAll(paginationDto);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.pokemonCardsService.findOnePlain(term);
  }

  @Patch(':id')
  @Auth(ValidRoles.admin, ValidRoles.superUser)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePokemonCardDto: UpdatePokemonCardDto,
  ) {
    return this.pokemonCardsService.update(id, updatePokemonCardDto);
  }

  @Delete(':id')
  @Auth(ValidRoles.admin)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.pokemonCardsService.remove(id);
  }
}
