import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ImagesPokemonCard, Resistance, Attacks, Weakness } from '../entities';

@Entity()
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

  @Column('float', {
    default: 1,
  })
  attack: number;

  @Column('float', {
    default: 1,
  })
  defense: number;

  @Column('text', {
    array: true,
    default: [],
  })
  tags: string[];

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
