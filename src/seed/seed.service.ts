import { Injectable } from '@nestjs/common';
import { PokemonCardsService } from './../pokemon-cards/pokemon-cards.service';
import { initialData } from './data/seed-data';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../auth/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedService {
  constructor(
    private readonly pokemonCardsService: PokemonCardsService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async runSeed() {
    await this.deleteTables();
    const adminUsers = await this.insertUsers();
    await this.insertNewPokemonCards(adminUsers);
    return 'SEED EXECUTED';
  }

  private async deleteTables() {
    await this.pokemonCardsService.deleteAllPokemonCards();

    const queryBuilder = this.userRepository.createQueryBuilder();
    await queryBuilder.delete().delete().where({}).execute();
  }

  private async insertUsers() {
    const seedUsers = initialData.users;

    const users: User[] = [];

    seedUsers.forEach((user) => {
      users.push(this.userRepository.create(user));
    });

    const dbUsers = await this.userRepository.save(seedUsers);

    return dbUsers[0];
  }

  private async insertNewPokemonCards(user: User) {
    await this.pokemonCardsService.deleteAllPokemonCards();

    const pokemonCards = initialData.pokemonCards;

    const insertPormises = [];

    pokemonCards.forEach((pokemonCard) => {
      insertPormises.push(this.pokemonCardsService.create(pokemonCard, user));
    });

    await Promise.all(insertPormises);

    return true;
  }
}
