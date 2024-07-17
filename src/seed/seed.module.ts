import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonCardsModule } from '../pokemon-cards/pokemon-cards.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PokemonCardsModule],
})
export class SeedModule {}
