import { CreatePokemonCardDto } from 'src/pokemon-cards/dto/create-pokemon-card.dto';

interface SeedPokemonCard extends CreatePokemonCardDto {}

interface SeedData {
  pokemonCards: SeedPokemonCard[];
}

export const initialData: SeedData = {
  pokemonCards: [
    {
      name: "Blaine's Charizard",
      description:
        'Pokémon-EX rule: When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards.',
      type: 'fire',
      hp: 100,
      images: ['https://images.pokemontcg.io/gym2/2_hires.png'],
      attacks: [
        {
          attackName: 'Roaring Flames',
          cost: 'Fire',
          damage: '20+',
          text: "Discard all Fire Energy cards attached to Blaine's Charizard. If all Energy cards attached to Blaine's Charizard provide 2 Fire Energy, discard all of them. This attack does 20 damage plus 20 more damage for each Fire Energy discarded in this way.",
        },
        {
          attackName: 'Flame Jet',
          cost: '{"Fire","Fire"}',
          damage: '',
          text: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
        },
      ],
      resistances: [
        {
          type: 'Fighting',
          value: '-30',
        },
      ],
      weakness: [
        {
          type: 'Water',
          value: '×2',
        },
      ],
    },
    {
      name: 'Pikachu',
      description: 'A yellow mouse Pokémon with electric abilities.',
      type: 'lightning',
      hp: 60,
      images: ['https://images.pokemontcg.io/basep/1_hires.png'],
      attacks: [
        {
          attackName: 'Growl',
          cost: 'Colorless',
          damage: '',
          text: "If the Defending Pokémon attacks Pikachu during your opponent's next turn, any damage done by the attack is reduced by 10 (after applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
        },
        {
          attackName: 'Thundershock',
          cost: '{"Lightning","Lightning"}',
          damage: '20',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Fighting',
          value: '×2',
        },
      ],
    },
    {
      name: 'Charmander',
      description: 'A small, lizard-like Pokémon with a flame on its tail.',
      type: 'fire',
      hp: 60,
      images: ['https://images.pokemontcg.io/det1/4_hires.png'],
      attacks: [
        {
          attackName: 'Reckless Charge',
          cost: 'Colorless',
          damage: '20',
          text: 'This Pokémon does 10 damage to itself.',
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Water',
          value: '×2',
        },
      ],
    },
    {
      name: 'Dark Crobat',
      description:
        'A bat Pokémon that uses dark powers to surprise its opponents.',
      type: 'grass',
      hp: 70,
      images: ['https://images.pokemontcg.io/neo4/2_hires.png'],
      attacks: [
        {
          attackName: 'Dark Drain',
          cost: '{"Grass","Grass"}',
          damage: '',
          text: "Flip a coin for each of your opponent's Pokémon. For each heads, this attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance. Remove a number of damage counters from Dark Crobat equal to the damage dealt. If Dark Crobat has fewer damage counters than that, remove all of them.",
        },
      ],
      resistances: [
        {
          type: 'Fighting',
          value: '-30',
        },
      ],
      weakness: [
        {
          type: 'Psychic',
          value: '×2',
        },
      ],
    },
    {
      name: 'Lugia',
      description:
        'A legendary Pokémon known for its powerful psychic abilities.',
      type: 'psychic',
      hp: 80,
      images: ['https://images.pokemontcg.io/pop5/2_hires.png'],
      attacks: [
        {
          attackName: 'Super Psy Bolt',
          cost: '{"Psychic","Colorless"}',
          damage: '20',
          text: '',
        },
        {
          attackName: 'Aerowing',
          cost: '{"Psychic","Colorless","Colorless"}',
          damage: '30',
          text: 'Before doing damage, you may flip a coin. If tails, this attack does nothing. If heads, this attack does 60 damage instead.',
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Psychic',
          value: '×2',
        },
      ],
    },
    {
      name: "Erika's Venusaur",
      description:
        'A giant flower Pokémon that can release a large amount of energy.',
      type: 'grass',
      hp: 90,
      images: ['https://images.pokemontcg.io/gym2/4_hires.png'],
      attacks: [
        {
          attackName: 'Growth',
          cost: 'Grass',
          damage: '',
          text: "Flip a coin. If heads, you may attach up to 2 Grass Energy cards from your hand to Erika's Venusaur.",
        },
        {
          attackName: 'Wide Solarbeam',
          cost: '{"Grass","Grass","Grass","Grass"}',
          damage: '20',
          text: "If your opponent has any Benched Pokémon, choose 2 of them (or 1 if he or she only has 1). This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Fire',
          value: '×2',
        },
      ],
    },

    {
      name: 'Bellossom',
      description: 'A Pokémon that loves to dance in the sunlight.',
      type: 'grass',
      hp: 120,
      images: ['https://images.pokemontcg.io/xy7/4_hires.png'],
      attacks: [
        {
          attackName: 'Windmill',
          cost: 'Grass',
          damage: '20',
          text: 'Switch this Pokémon with 1 of your Benched Pokémon.',
        },
        {
          attackName: 'Flower Tornado',
          cost: '{"Grass","Colorless"}',
          damage: '60',
          text: 'Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.',
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Fire',
          value: '×2',
        },
      ],
    },
    {
      name: 'Jolteon',
      description:
        'A quick and agile Pokémon that can generate powerful electricity.',
      type: 'lightning',
      hp: 70,
      images: ['https://images.pokemontcg.io/pop3/3_hires.png'],
      attacks: [
        {
          attackName: 'Thundershock',
          cost: '{"Lightning","Colorless"}',
          damage: '20',
          text: 'Flip a coin. If heads, the Defending Pokémon is now Paralyzed.',
        },
        {
          attackName: 'Pin Missile',
          cost: '{"Lightning","Colorless","Colorless"}',
          damage: '20×',
          text: 'Flip 4 coins. This attack does 20 damage times the number of heads.',
        },
      ],
      resistances: [
        {
          type: 'Metal',
          value: '-30',
        },
      ],
      weakness: [
        {
          type: 'Fighting',
          value: '×2',
        },
      ],
    },
    {
      name: 'Aggron',
      description: 'A heavily armored Pokémon with immense strength.',
      type: 'metal',
      hp: 110,
      images: ['https://images.pokemontcg.io/ex12/2_hires.png'],
      attacks: [
        {
          attackName: 'Heavy Blow',
          cost: '{"Fighting","Colorless","Colorless"}',
          damage: '70-',
          text: 'Does 70 damage minus 10 damage for each damage counter on Aggron. If Aggron has any React Energy cards attached to it, this attack does 70 damage instead.',
        },
        {
          attackName: 'Bound Crush',
          cost: '{"Fighting","Metal","Colorless","Colorless"}',
          damage: '',
          text: "Choose 1 of your opponent's Pokémon. This attack does 60 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) During your next turn, Aggron can't use Bound Crush.",
        },
      ],
      resistances: [
        {
          type: 'Grass',
          value: '-30',
        },
      ],
      weakness: [
        {
          type: 'Fire',
          value: '×2',
        },
      ],
    },
    {
      name: 'Cherrim',
      description: 'A cheerful Pokémon that blooms in the sunlight.',
      type: 'grass',
      hp: 80,
      images: ['https://images.pokemontcg.io/ru1/2_hires.png'],
      attacks: [
        {
          attackName: 'Solarbeam',
          cost: '{"Grass","Colorless","Colorless"}',
          damage: '60',
          text: '',
        },
      ],
      resistances: [
        {
          type: 'Water',
          value: '-20',
        },
      ],
      weakness: [
        {
          type: 'Fire',
          value: '×2',
        },
      ],
    },
    {
      name: 'Tangela',
      description: 'A Pokémon that tangles any moving thing with its vines.',
      type: 'grass',
      hp: 80,
      images: ['https://images.pokemontcg.io/xy11/1_hires.png'],
      attacks: [
        {
          attackName: 'Slam',
          cost: '{"Grass","Colorless"}',
          damage: '30×',
          text: 'Flip 2 coins. This attack does 30 damage times the number of heads.',
        },
        {
          attackName: 'Mega Drain',
          cost: '{"Grass","Grass","Colorless"}',
          damage: '40',
          text: 'Heal 20 damage from this Pokémon.',
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Fire',
          value: '×2',
        },
      ],
    },
    {
      name: 'Venusaur & Snivy-GX',
      description: 'A powerful TAG TEAM Pokémon with immense strength.',
      type: 'grass',
      hp: 270,
      images: ['https://images.pokemontcg.io/sm12/1_hires.png'],

      attacks: [
        {
          attackName: 'Forest Dump',
          cost: '{"Grass","Colorless","Colorless","Colorless"}',
          damage: '160',
          text: '',
        },
        {
          attackName: 'Solar Plant-GX',
          cost: '{"Colorless","Colorless","Colorless"}',
          damage: '',
          text: "This attack does 50 damage to each of your opponent's Pokémon. If this Pokémon has at least 2 extra Energy attached to it (in addition to this attack's cost), heal all damage from all of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Fire',
          value: '×2',
        },
      ],
    },
    {
      name: 'Caterpie',
      description: 'A small Pokémon that is known for its rapid growth.',
      type: 'grass',
      hp: 50,
      images: ['https://images.pokemontcg.io/sm1/1_hires.png'],
      attacks: [
        {
          attackName: 'Nap',
          cost: '{"Colorless"}',
          damage: '',
          text: 'Heal 20 damage from this Pokémon.',
        },
        {
          attackName: 'Gnaw',
          cost: '{"Colorless","Colorless"}',
          damage: '20',
          text: '',
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Fire',
          value: '×2',
        },
      ],
    },
    {
      name: 'Dratini',
      description:
        'A mystical Pokémon that is said to live in the depths of seas.',
      type: 'dragon',
      hp: 40,
      images: ['https://images.pokemontcg.io/dv1/2_hires.png'],
      attacks: [
        {
          attackName: 'Hypnotic Gaze',
          cost: '{"Grass"}',
          damage: '',
          text: 'The Defending Pokémon is now Asleep.',
        },
        {
          attackName: 'Tail Whap',
          cost: '{"Lightning"}',
          damage: '10',
          text: '',
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Dragon',
          value: '×2',
        },
      ],
    },
    {
      name: 'Snivy',
      description: 'A Grass-type Pokémon known for its calm demeanor.',
      type: 'grass',
      hp: 60,
      images: ['https://images.pokemontcg.io/bw1/2_hires.png'],
      attacks: [
        {
          attackName: 'Leaf Blade',
          cost: '{"Grass","Colorless"}',
          damage: '10+',
          text: 'Flip a coin. If heads, this attack does 30 more damage.',
        },
      ],
      resistances: [
        {
          type: 'Water',
          value: '-20',
        },
      ],
      weakness: [
        {
          type: 'Fire',
          value: '×2',
        },
      ],
    },
    {
      name: 'Ninetales',
      description: 'A mystical Fire-type Pokémon known for its nine tails.',
      type: 'fire',
      hp: 90,
      images: ['https://images.pokemontcg.io/ru1/3_hires.png'],
      attacks: [
        {
          attackName: 'Flame Tail',
          cost: '{"Fire","Colorless","Colorless"}',
          damage: '60',
          text: '',
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Water',
          value: '×2',
        },
      ],
    },
    {
      name: 'Beedrill',
      description: 'A fierce Grass-type Pokémon with sharp stingers.',
      type: 'grass',
      hp: 120,
      images: ['https://images.pokemontcg.io/xy5/3_hires.png'],
      attacks: [
        {
          attackName: 'Allergic Shock',
          cost: '{"Grass"}',
          damage: '',
          text: 'During your next turn, if the Defending Pokémon is damaged by an attack, it is Knocked Out.',
        },
        {
          attackName: 'Twineedle',
          cost: '{"Grass","Grass"}',
          damage: '50×',
          text: 'Flip 2 coins. This attack does 50 damage times the number of heads.',
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Fire',
          value: '×2',
        },
      ],
    },
    {
      name: 'Manaphy',
      description: 'A Water-type Pokémon known for its healing abilities.',
      type: 'water',
      hp: 70,
      images: ['https://images.pokemontcg.io/pop6/3_hires.png'],
      attacks: [
        {
          attackName: 'Call for Family',
          cost: '{"Colorless"}',
          damage: '',
          text: 'Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.',
        },
        {
          attackName: 'Aqua Ring',
          cost: '{"Water","Water"}',
          damage: '30',
          text: 'Switch Manaphy with 1 of your Benched Pokémon.',
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Lightning',
          value: '+20',
        },
      ],
    },
    {
      name: 'Blastoise',
      description:
        "Evolves from Wartortle. As often as you like during your turn (before your attack), you may attach 1 Water Energy card to 1 of your Water Pokémon. This power can't be used if Blastoise is Asleep, Confused, or Paralyzed.",
      type: 'Water',
      hp: 100,
      images: ['https://images.pokemontcg.io/base1/2_hires.png'],
      attacks: [
        {
          attackName: 'Hydro Pump',
          cost: '{"Water","Water","Water"}',
          damage: '40+',
          text: "Does 40 damage plus 10 more damage for each Water Energy attached to Blastoise but not used to pay for this attack's Energy cost. Extra Water Energy after the 2nd doesn't count.",
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Lightning',
          value: '×2',
        },
      ],
    },
    {
      name: 'Butterfree',
      description:
        'Evolves from Metapod. Heal all damage from all of your Pokémon. Shuffle this Pokémon and all cards attached to it into your deck.',
      type: 'Grass',
      hp: 120,
      images: ['https://images.pokemontcg.io/sm3/3_hires.png'],
      attacks: [
        {
          attackName: 'Bye-Bye Heal',
          cost: '{"Grass"}',
          damage: '',
          text: 'Heal all damage from all of your Pokémon. Shuffle this Pokémon and all cards attached to it into your deck.',
        },
        {
          attackName: 'Stun Spore',
          cost: '{"Grass","Colorless","Colorless"}',
          damage: '60',
          text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Fire',
          value: '×2',
        },
      ],
    },
    {
      name: 'Seedot',
      description: 'A Grass-type Pokémon that evolves into Nuzleaf.',
      type: 'Grass',
      hp: 50,
      images: ['https://images.pokemontcg.io/xy2/5_hires.png'],
      attacks: [
        {
          attackName: 'Call for Family',
          cost: '{"Colorless"}',
          damage: '',
          text: 'Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.',
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Fire',
          value: '×2',
        },
      ],
    },
    {
      name: 'Weedle',
      description: 'A Grass-type Pokémon that evolves into Kakuna.',
      type: 'Grass',
      hp: 50,
      images: ['https://images.pokemontcg.io/xy1/3_hires.png'],
      attacks: [
        {
          attackName: 'Leaf Munch',
          cost: '{"Grass"}',
          damage: '10+',
          text: "If your opponent's Active Pokémon is a Grass Pokémon, this attack does 20 more damage.",
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Fire',
          value: '×2',
        },
      ],
    },
    {
      name: 'Charmeleon',
      description:
        'Evolves from Charmander. When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard the top 5 cards of your deck. If any of those cards are Fire Energy cards, attach them to this Pokémon.',
      type: 'Fire',
      hp: 80,
      images: ['https://images.pokemontcg.io/sm75/2_hires.png'],

      attacks: [
        {
          attackName: 'Flamethrower',
          cost: '{"Fire","Fire","Colorless"}',
          damage: '80',
          text: 'Discard an Energy from this Pokémon.',
        },
      ],
      resistances: [],
      weakness: [
        {
          type: 'Water',
          value: '×2',
        },
      ],
    },
  ],
};
