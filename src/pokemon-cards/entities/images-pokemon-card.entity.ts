import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ImagesPokemonCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  url: string;
}
