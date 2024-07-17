import { Injectable } from '@nestjs/common';
import { PokemonCardsService } from './../pokemon-cards/pokemon-cards.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly pokemonCardsService: PokemonCardsService) {}

  async runSeed() {
    await this.insertNewPokemonCards();
    return 'SEED EXECUTED';
  }

  private async insertNewPokemonCards() {
    await this.pokemonCardsService.deleteAllPokemonCards();

    const pokemonCards = initialData.pokemonCards;

    const insertPormises = [];

    pokemonCards.forEach((pokemonCard) => {
      insertPormises.push(this.pokemonCardsService.create(pokemonCard));
    });

    await Promise.all(insertPormises);

    return true;
  }
}
