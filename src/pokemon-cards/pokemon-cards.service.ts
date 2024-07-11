import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePokemonCardDto } from './dto/create-pokemon-card.dto';
import { UpdatePokemonCardDto } from './dto/update-pokemon-card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonCard } from './entities/pokemon-card.entity';

@Injectable()
export class PokemonCardsService {
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
      console.log(error);
      throw new InternalServerErrorException(
        'Ops, algo salio tremendamente bad',
      );
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
}
