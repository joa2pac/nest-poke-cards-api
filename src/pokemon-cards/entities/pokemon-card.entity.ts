import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ImagesPokemonCard, Resistance, Attacks, Weakness } from '../entities';

@Entity({ name: 'pokemon_cards' })
export class PokemonCard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @Column('text')
  type: string;

  @Column('float', {
    default: 1,
  })
  hp: number;

  @OneToMany(
    () => ImagesPokemonCard,
    (imagesPokemonCard) => imagesPokemonCard.pokemonCard,
    { cascade: true, eager: true },
  )
  images: ImagesPokemonCard[];

  @OneToMany(
    () => Attacks,
    (attacksPokemonCard) => attacksPokemonCard.pokemonCard,
    { cascade: true, eager: true },
  )
  attacks: Attacks[];

  @OneToMany(
    () => Resistance,
    (resistancesPokemonCard) => resistancesPokemonCard.pokemonCard,
    { cascade: true, eager: true },
  )
  resistances: Resistance[];

  @OneToMany(
    () => Weakness,
    (weaknessPokemonCard) => weaknessPokemonCard.pokemonCard,
    { cascade: true, eager: true },
  )
  weakness: Weakness[];
}
