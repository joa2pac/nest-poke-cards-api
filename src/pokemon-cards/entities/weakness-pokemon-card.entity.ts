import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PokemonCard } from './pokemon-card.entity';

@Entity()
export class Weakness {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  type: string;

  @Column('text')
  value: string;

  @ManyToOne(() => PokemonCard, (pokemonCard) => pokemonCard.weakness, {
    onDelete: 'CASCADE',
  })
  pokemonCard: PokemonCard;
}
