import { Injectable } from '@nestjs/common';
import { PokemonCardsService } from './../pokemon-cards/pokemon-cards.service';

@Injectable()
export class SeedService {
  constructor(private readonly pokemonCardsService: PokemonCardsService) {}

  async runSeed() {
    await this.insertNewPokemonCards();
    return 'SEED EXECUTED';
  }

  private async insertNewPokemonCards() {
    await this.pokemonCardsService.deleteAllPokemonCards();
    return true;
  }
}
