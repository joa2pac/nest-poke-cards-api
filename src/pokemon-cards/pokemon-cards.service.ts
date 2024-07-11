import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
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
    return this.pokeCardRepository.find();
  }

  async findOne(id: string) {
    const pokeCard = await this.pokeCardRepository.findOneBy({ id });
    if (!pokeCard)
      throw new NotFoundException(`The card wit id ${id} not found`);
    return pokeCard;
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
