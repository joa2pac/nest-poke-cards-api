import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { CreatePokemonCardDto } from './dto/create-pokemon-card.dto';
import { UpdatePokemonCardDto } from './dto/update-pokemon-card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonCard } from './entities/pokemon-card.entity';

@Injectable()
export class PokemonCardsService {
  private readonly logger = new Logger('PokemonCardsService');

  constructor(
    @InjectRepository(PokemonCard)
    private readonly pokeCardRepository: Repository<PokemonCard>,
  ) {}

  async create(createPokemonCardDto: CreatePokemonCardDto) {
    try {
      const pokemonCard = this.pokeCardRepository.create(createPokemonCardDto);
      await this.pokeCardRepository.save(pokemonCard);
      return pokemonCard;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  findAll() {
    return `This action returns all pokemonCards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemonCard`;
  }

  update(id: number, updatePokemonCardDto: UpdatePokemonCardDto) {
    return `This action updates a #${id} pokemonCard`;
  }

  remove(id: number) {
    return `This action removes a #${id} pokemonCard`;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, checkk server logs',
    );
  }
}
