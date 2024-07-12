import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { validate as isUUID } from 'uuid';

import { CreatePokemonCardDto } from './dto/create-pokemon-card.dto';
import { UpdatePokemonCardDto } from './dto/update-pokemon-card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonCard } from './entities/pokemon-card.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class PokemonCardsService {
  private readonly logger = new Logger('PokemonCardsService');

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  constructor(
    @InjectRepository(PokemonCard)
    private readonly pokeCardRepository: Repository<PokemonCard>,
  ) {}

  async create(createPokemonCardDto: CreatePokemonCardDto) {
    createPokemonCardDto.name = this.capitalizeFirstLetter(
      createPokemonCardDto.name,
    );
    try {
      const pokemonCard = this.pokeCardRepository.create(createPokemonCardDto);
      await this.pokeCardRepository.save(pokemonCard);
      return pokemonCard;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 5, offset = 0 } = paginationDto;

    return this.pokeCardRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(term: string) {
    let pokemonCard: PokemonCard;

    if (isUUID(term)) {
      pokemonCard = await this.pokeCardRepository.findOneBy({ id: term });
    } else {
      const queryBuilder = this.pokeCardRepository.createQueryBuilder();
      pokemonCard = await queryBuilder
        .where('UPPER(name) =:name', {
          name: term.toUpperCase(),
        })
        .getOne();
    }

    if (!pokemonCard)
      throw new NotFoundException(`The card wit id ${term} not found`);
    return pokemonCard;
  }

  update(id: number, updatePokemonCardDto: UpdatePokemonCardDto) {
    return `This action updates a #${id} pokemonCard`;
  }

  async remove(id: string) {
    const pokeCard = this.findOne(id);
    await this.pokeCardRepository.delete({ id });
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, checkk server logs',
    );
  }
}
