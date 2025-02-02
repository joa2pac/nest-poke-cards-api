import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PokemonCardsService } from './pokemon-cards.service';
import { PokemonCardsController } from './pokemon-cards.controller';

import {
  PokemonCard,
  ImagesPokemonCard,
  Resistance,
  Attacks,
  Weakness,
} from './entities';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [PokemonCardsController],
  providers: [PokemonCardsService],
  imports: [
    TypeOrmModule.forFeature([
      PokemonCard,
      ImagesPokemonCard,
      Attacks,
      Resistance,
      Weakness,
    ]),
    AuthModule,
  ],
  exports: [PokemonCardsService, TypeOrmModule],
})
export class PokemonCardsModule {}
