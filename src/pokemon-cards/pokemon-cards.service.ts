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
import { ImagesPokemonCard } from './entities';

@Injectable()
export class PokemonCardsService {
  private readonly logger = new Logger('PokemonCardsService');

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  constructor(
    @InjectRepository(PokemonCard)
    private readonly pokemonCardRepository: Repository<PokemonCard>,

    @InjectRepository(ImagesPokemonCard)
    private readonly imagePokemonCardRepository: Repository<ImagesPokemonCard>,
  ) {}

  async create(createPokemonCardDto: CreatePokemonCardDto) {
    createPokemonCardDto.name = this.capitalizeFirstLetter(
      createPokemonCardDto.name,
    );
    try {
      const { images = [], ...pokemonCardRest } = createPokemonCardDto;

      const pokemonCard = this.pokemonCardRepository.create({
        ...pokemonCardRest,
        images: images.map((image) =>
          this.imagePokemonCardRepository.create({ url: image }),
        ),
      });
      await this.pokemonCardRepository.save(pokemonCard);
      return { ...pokemonCard, images };
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 5, offset = 0 } = paginationDto;

    const pokemonCards = await this.pokemonCardRepository.find({
      take: limit,
      skip: offset,
      relations: {
        images: true,
      },
    });

    return pokemonCards.map(({ images, ...rest }) => ({
      ...rest,
      images: images.map((img) => img.url),
    }));
  }

  async findOne(term: string) {
    let pokemonCard: PokemonCard;

    if (isUUID(term)) {
      pokemonCard = await this.pokemonCardRepository.findOneBy({ id: term });
    } else {
      const queryBuilder =
        this.pokemonCardRepository.createQueryBuilder('pokeCard');
      pokemonCard = await queryBuilder
        .where('UPPER(name) =:name', {
          name: term.toUpperCase(),
        })
        .leftJoinAndSelect('pokeCard.images', 'pokeCardImages')
        .getOne();
    }

    if (!pokemonCard)
      throw new NotFoundException(`The card wit id ${term} not found`);
    return pokemonCard;
  }

  async findOnePlain(term: string) {
    const { images = [], ...rest } = await this.findOne(term);
    return {
      ...rest,
      images: images.map((image) => image.url),
    };
  }

  async update(id: string, updatePokemonCardDto: UpdatePokemonCardDto) {
    const pokemonCard = await this.pokemonCardRepository.preload({
      id: id,
      ...updatePokemonCardDto,
      images: [],
    });

    if (!pokemonCard)
      throw new NotFoundException(`Pokemon Card with id: ${id} not found`);
    try {
      await this.pokemonCardRepository.save(pokemonCard);
      return pokemonCard;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const pokeCard = this.findOne(id);
    await this.pokemonCardRepository.delete({ id });
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, checkk server logs',
    );
  }
}
