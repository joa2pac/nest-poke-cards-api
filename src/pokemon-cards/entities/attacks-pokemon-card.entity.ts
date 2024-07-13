import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { PokemonCard } from './pokemon-card.entity';

@Entity()
export class Attacks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  cost: string;

  @Column('text')
  damage: string;

  @Column('text')
  text: string;

  @ManyToOne(() => PokemonCard, (pokemonCard) => pokemonCard.attacks)
  pokemonCard: PokemonCard;
}
