import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PokemonCardsService } from './pokemon-cards.service';
import { PokemonCardsController } from './pokemon-cards.controller';

import { PokemonCard, ImagesPokemonCard } from './entities';
import { Attacks } from './entities/attacks-pokemon-card.entity';

@Module({
  controllers: [PokemonCardsController],
  providers: [PokemonCardsService],
  imports: [
    TypeOrmModule.forFeature([PokemonCard, ImagesPokemonCard, Attacks]),
  ],
})
export class PokemonCardsModule {}
