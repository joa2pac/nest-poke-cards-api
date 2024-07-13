import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ImagesPokemonCard } from './images-pokemon-card.entity';

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
  })
  weakness: string[];

  @Column('text', {
    array: true,
    default: [],
  })
  resistance: string[];

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
}
