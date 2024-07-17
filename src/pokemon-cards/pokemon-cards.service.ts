import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { validate as isUUID } from 'uuid';

import { CreatePokemonCardDto } from './dto/create-pokemon-card.dto';
import { UpdatePokemonCardDto } from './dto/update-pokemon-card.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PokemonCard } from './entities/pokemon-card.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { ImagesPokemonCard, Resistance, Weakness } from './entities';
import { Attacks } from './entities/attacks-pokemon-card.entity';

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

    @InjectRepository(Attacks)
    private readonly attacksPokemonCardRepository: Repository<Attacks>,

    @InjectRepository(Weakness)
    private readonly weaknesssPokemonCardRepository: Repository<Weakness>,

    @InjectRepository(Resistance)
    private readonly resistancekemonCardRepository: Repository<Resistance>,

    private readonly dataSource: DataSource,
  ) {}

  async create(createPokemonCardDto: CreatePokemonCardDto) {
    createPokemonCardDto.name = this.capitalizeFirstLetter(
      createPokemonCardDto.name,
    );
    try {
      const {
        images = [],
        attacks,
        weakness,
        resistances,
        ...pokemonCardRest
      } = createPokemonCardDto;

      const pokemonCard = this.pokemonCardRepository.create({
        ...pokemonCardRest,
        images: images.map((image) =>
          this.imagePokemonCardRepository.create({ url: image }),
        ),
        attacks: attacks.map((attack) =>
          this.attacksPokemonCardRepository.create({
            ...attack,
          }),
        ),
        weakness: weakness.map((wks) =>
          this.weaknesssPokemonCardRepository.create({
            ...wks,
          }),
        ),
        resistances: resistances.map((resistance) =>
          this.resistancekemonCardRepository.create({
            ...resistance,
          }),
        ),
      });
      await this.pokemonCardRepository.save(pokemonCard);
      return { ...pokemonCard, images, attacks, resistances, weakness };
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
        attacks: true,
      },
    });

    return pokemonCards.map(({ images, attacks, ...rest }) => ({
      ...rest,
      images: images.map((img) => img.url),
      attacks: attacks.map(({ id, ...attack }) => attack),
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
        .leftJoinAndSelect('pokeCard.attacks', 'pokeCardAttacks')
        .getOne();
    }

    if (!pokemonCard) this.notFoundPokemonCardById(term);
    return pokemonCard;
  }

  async findOnePlain(term: string) {
    const { images = [], attacks = [], ...rest } = await this.findOne(term);
    return {
      ...rest,
      images: images.map((image) => image.url),
      attacks: attacks.map(({ id, ...attack }) => attack),
    };
  }

  async update(id: string, updatePokemonCardDto: UpdatePokemonCardDto) {
    const { images, attacks, ...toUpdate } = updatePokemonCardDto;

    const pokemonCard = await this.pokemonCardRepository.preload({
      id,
      ...toUpdate,
    });

    if (!pokemonCard) this.notFoundPokemonCardById(id);

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (images) {
        await queryRunner.manager.delete(ImagesPokemonCard, {
          pokemonCard: { id },
        });
        pokemonCard.images = images.map((image) =>
          this.imagePokemonCardRepository.create({ url: image }),
        );
      }
      if (attacks) {
        await queryRunner.manager.delete(Attacks, {
          pokemonCard: { id },
        });
        pokemonCard.attacks = attacks.map((attack) =>
          this.attacksPokemonCardRepository.create({
            ...attack,
          }),
        );
      }

      await queryRunner.manager.save(pokemonCard);

      await queryRunner.commitTransaction();
      await queryRunner.release();

      return this.findOnePlain(id);
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBExceptions(error);
    }
  }

  async remove(id: string) {
    const pokeCard = this.findOne(id);
    await this.pokemonCardRepository.delete({ id });
  }

  async deleteAllPokemonCards() {
    const query = this.pokemonCardRepository.createQueryBuilder('pokemonCard');

    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  private handleDBExceptions(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, checkk server logs',
    );
  }

  private notFoundPokemonCardById(term: string) {
    throw new NotFoundException(`Pokemon Card with id: ${term} not found`);
  }
}
