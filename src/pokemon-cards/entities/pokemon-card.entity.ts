import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class PokemonCard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  name: string;

  @Column()
  supertype: string;

  @Column('simple-array')
  subtypes: string[];

  @Column()
  hp: string;

  @Column('simple-array')
  types: string[];

  @Column('simple-array', { nullable: true })
  evolvesTo: string[];

  @Column('simple-array', { nullable: true })
  rules: string[];

  @OneToMany(() => Attack, (attack) => attack.card, { cascade: true })
  attacks: Attack[];

  @OneToMany(() => Weakness, (weakness) => weakness.card, { cascade: true })
  weaknesses: Weakness[];

  @Column('simple-array')
  retreatCost: string[];

  @Column()
  convertedRetreatCost: number;

  //   @ManyToOne(() => Set, (set) => set.cards)
  //   set: Set;

  @Column()
  number: string;

  @Column()
  artist: string;

  @Column()
  rarity: string;

  @Column('simple-array')
  nationalPokedexNumbers: number[];

  @Column('simple-json')
  legalities: {
    unlimited: string;
    expanded: string;
  };

  @Column('simple-json')
  images: {
    small: string;
    large: string;
  };

  @Column('simple-json')
  tcgplayer: {
    url: string;
    updatedAt: string;
    prices: {
      holofoil: {
        low: number;
        mid: number;
        high: number;
        market: number;
        directLow: number;
      };
    };
  };
}

@Entity()
export class Attack {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PokemonCard, (card) => card.attacks)
  card: PokemonCard;

  @Column()
  name: string;

  @Column('simple-array')
  cost: string[];

  @Column()
  convertedEnergyCost: number;

  @Column()
  damage: string;

  @Column()
  text: string;
}

@Entity()
export class Weakness {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PokemonCard, (card) => card.weaknesses)
  card: PokemonCard;

  @Column()
  type: string;

  @Column()
  value: string;
}

// @Entity()
// export class Set {
//   @PrimaryGeneratedColumn()
//   id: string;

//   @OneToMany(() => PokemonCard, (card) => card.set)
//   cards: PokemonCard[];

//   @Column()
//   name: string;

//   @Column()
//   series: string;

//   @Column()
//   printedTotal: number;

//   @Column()
//   total: number;

//   @Column('simple-json')
//   legalities: {
//     unlimited: string;
//     expanded: string;
//   };

//   @Column()
//   ptcgoCode: string;

//   @Column()
//   releaseDate: string;

//   @Column()
//   updatedAt: string;

//   @Column('simple-json')
//   images: {
//     symbol: string;
//     logo: string;
//   };
// }
