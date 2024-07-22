import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonCardsModule } from '../pokemon-cards/pokemon-cards.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PokemonCardsModule, AuthModule],
})
export class SeedModule {}
