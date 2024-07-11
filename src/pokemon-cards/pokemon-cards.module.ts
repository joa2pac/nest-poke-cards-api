import { Module } from '@nestjs/common';
import { PokemonCardsService } from './pokemon-cards.service';
import { PokemonCardsController } from './pokemon-cards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonCard } from './entities/pokemon-card.entity';

@Module({
  controllers: [PokemonCardsController],
  providers: [PokemonCardsService],
  imports: [TypeOrmModule.forFeature([PokemonCard])],
})
export class PokemonCardsModule {}
