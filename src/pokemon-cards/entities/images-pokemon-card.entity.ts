import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PokemonCard } from './pokemon-card.entity';

@Entity()
export class ImagesPokemonCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  url: string;

  @ManyToOne(() => PokemonCard, (pokemonCard) => pokemonCard.images, {
    onDelete: 'CASCADE',
  })
  pokemonCard: PokemonCard;
}
