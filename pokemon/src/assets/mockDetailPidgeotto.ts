import { Pokemon } from "pokenode-ts";

const mockDetailPidgeotto: Pokemon = {
  abilities: [
    {
      ability: {
        name: "keen-eye",
        url: "https://pokeapi.co/api/v2/ability/51/",
      },
      is_hidden: false,
      slot: 1,
    },
    {
      ability: {
        name: "tangled-feet",
        url: "https://pokeapi.co/api/v2/ability/77/",
      },
      is_hidden: false,
      slot: 2,
    },
    {
      ability: {
        name: "big-pecks",
        url: "https://pokeapi.co/api/v2/ability/145/",
      },
      is_hidden: true,
      slot: 3,
    },
  ],
  base_experience: 122,
  // cries: {
  //   latest:
  //     "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/17.ogg",
  //   legacy:
  //     "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/17.ogg",
  // },
  forms: [
    {
      name: "pidgeotto",
      url: "https://pokeapi.co/api/v2/pokemon-form/17/",
    },
  ],
  game_indices: [
    {
      game_index: 150,
      version: {
        name: "red",
        url: "https://pokeapi.co/api/v2/version/1/",
      },
    },
    {
      game_index: 150,
      version: {
        name: "blue",
        url: "https://pokeapi.co/api/v2/version/2/",
      },
    },
    {
      game_index: 150,
      version: {
        name: "yellow",
        url: "https://pokeapi.co/api/v2/version/3/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "gold",
        url: "https://pokeapi.co/api/v2/version/4/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "silver",
        url: "https://pokeapi.co/api/v2/version/5/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "crystal",
        url: "https://pokeapi.co/api/v2/version/6/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "ruby",
        url: "https://pokeapi.co/api/v2/version/7/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "sapphire",
        url: "https://pokeapi.co/api/v2/version/8/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "emerald",
        url: "https://pokeapi.co/api/v2/version/9/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "firered",
        url: "https://pokeapi.co/api/v2/version/10/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "leafgreen",
        url: "https://pokeapi.co/api/v2/version/11/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "diamond",
        url: "https://pokeapi.co/api/v2/version/12/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "pearl",
        url: "https://pokeapi.co/api/v2/version/13/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "platinum",
        url: "https://pokeapi.co/api/v2/version/14/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "heartgold",
        url: "https://pokeapi.co/api/v2/version/15/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "soulsilver",
        url: "https://pokeapi.co/api/v2/version/16/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "black",
        url: "https://pokeapi.co/api/v2/version/17/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "white",
        url: "https://pokeapi.co/api/v2/version/18/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "black-2",
        url: "https://pokeapi.co/api/v2/version/21/",
      },
    },
    {
      game_index: 17,
      version: {
        name: "white-2",
        url: "https://pokeapi.co/api/v2/version/22/",
      },
    },
  ],
  height: 11,
  held_items: [],
  id: 17,
  is_default: true,
  location_area_encounters: "https://pokeapi.co/api/v2/pokemon/17/encounters",
  moves: [
    {
      move: {
        name: "razor-wind",
        url: "https://pokeapi.co/api/v2/move/13/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 45,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
      ],
    },
    {
      move: {
        name: "gust",
        url: "https://pokeapi.co/api/v2/move/16/",
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "wing-attack",
        url: "https://pokeapi.co/api/v2/move/17/",
      },
      version_group_details: [
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 33,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 37,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "whirlwind",
        url: "https://pokeapi.co/api/v2/move/18/",
      },
      version_group_details: [
        {
          level_learned_at: 21,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 21,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 23,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 20,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 25,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "fly",
        url: "https://pokeapi.co/api/v2/move/19/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "sand-attack",
        url: "https://pokeapi.co/api/v2/move/28/",
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 3,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
        {
          level_learned_at: 5,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "headbutt",
        url: "https://pokeapi.co/api/v2/move/29/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
      ],
    },
    {
      move: {
        name: "tackle",
        url: "https://pokeapi.co/api/v2/move/33/",
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "take-down",
        url: "https://pokeapi.co/api/v2/move/36/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
      ],
    },
    {
      move: {
        name: "double-edge",
        url: "https://pokeapi.co/api/v2/move/38/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
      ],
    },
    {
      move: {
        name: "toxic",
        url: "https://pokeapi.co/api/v2/move/92/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
      ],
    },
    {
      move: {
        name: "agility",
        url: "https://pokeapi.co/api/v2/move/97/",
      },
      version_group_details: [
        {
          level_learned_at: 40,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 40,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 43,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 31,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 32,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "quick-attack",
        url: "https://pokeapi.co/api/v2/move/98/",
      },
      version_group_details: [
        {
          level_learned_at: 12,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 12,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 15,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 1,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 9,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 13,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "rage",
        url: "https://pokeapi.co/api/v2/move/99/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
      ],
    },
    {
      move: {
        name: "mimic",
        url: "https://pokeapi.co/api/v2/move/102/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
      ],
    },
    {
      move: {
        name: "double-team",
        url: "https://pokeapi.co/api/v2/move/104/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "reflect",
        url: "https://pokeapi.co/api/v2/move/115/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
      ],
    },
    {
      move: {
        name: "bide",
        url: "https://pokeapi.co/api/v2/move/117/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
      ],
    },
    {
      move: {
        name: "mirror-move",
        url: "https://pokeapi.co/api/v2/move/119/",
      },
      version_group_details: [
        {
          level_learned_at: 49,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 49,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 55,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 55,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 11,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
      ],
    },
    {
      move: {
        name: "swift",
        url: "https://pokeapi.co/api/v2/move/129/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
      ],
    },
    {
      move: {
        name: "sky-attack",
        url: "https://pokeapi.co/api/v2/move/143/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: {
        name: "rest",
        url: "https://pokeapi.co/api/v2/move/156/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "substitute",
        url: "https://pokeapi.co/api/v2/move/164/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "yellow",
            url: "https://pokeapi.co/api/v2/version-group/2/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "thief",
        url: "https://pokeapi.co/api/v2/move/168/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "snore",
        url: "https://pokeapi.co/api/v2/move/173/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: {
        name: "curse",
        url: "https://pokeapi.co/api/v2/move/174/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
      ],
    },
    {
      move: {
        name: "protect",
        url: "https://pokeapi.co/api/v2/move/182/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "mud-slap",
        url: "https://pokeapi.co/api/v2/move/189/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
      ],
    },
    {
      move: {
        name: "detect",
        url: "https://pokeapi.co/api/v2/move/197/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
      ],
    },
    {
      move: {
        name: "endure",
        url: "https://pokeapi.co/api/v2/move/203/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "swagger",
        url: "https://pokeapi.co/api/v2/move/207/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "steel-wing",
        url: "https://pokeapi.co/api/v2/move/211/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "attract",
        url: "https://pokeapi.co/api/v2/move/213/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "sleep-talk",
        url: "https://pokeapi.co/api/v2/move/214/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "return",
        url: "https://pokeapi.co/api/v2/move/216/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: {
        name: "frustration",
        url: "https://pokeapi.co/api/v2/move/218/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: {
        name: "hidden-power",
        url: "https://pokeapi.co/api/v2/move/237/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: {
        name: "twister",
        url: "https://pokeapi.co/api/v2/move/239/",
      },
      version_group_details: [
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 22,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "rain-dance",
        url: "https://pokeapi.co/api/v2/move/240/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "sunny-day",
        url: "https://pokeapi.co/api/v2/move/241/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "gold-silver",
            url: "https://pokeapi.co/api/v2/version-group/3/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "crystal",
            url: "https://pokeapi.co/api/v2/version-group/4/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "uproar",
        url: "https://pokeapi.co/api/v2/move/253/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: {
        name: "heat-wave",
        url: "https://pokeapi.co/api/v2/move/257/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: {
        name: "facade",
        url: "https://pokeapi.co/api/v2/move/263/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "secret-power",
        url: "https://pokeapi.co/api/v2/move/290/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
      ],
    },
    {
      move: {
        name: "feather-dance",
        url: "https://pokeapi.co/api/v2/move/297/",
      },
      version_group_details: [
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 34,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 27,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "air-cutter",
        url: "https://pokeapi.co/api/v2/move/314/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
      ],
    },
    {
      move: {
        name: "aerial-ace",
        url: "https://pokeapi.co/api/v2/move/332/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ruby-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/5/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "emerald",
            url: "https://pokeapi.co/api/v2/version-group/6/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "firered-leafgreen",
            url: "https://pokeapi.co/api/v2/version-group/7/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "colosseum",
            url: "https://pokeapi.co/api/v2/version-group/12/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "xd",
            url: "https://pokeapi.co/api/v2/version-group/13/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 52,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "roost",
        url: "https://pokeapi.co/api/v2/move/355/",
      },
      version_group_details: [
        {
          level_learned_at: 42,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 17,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 42,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "natural-gift",
        url: "https://pokeapi.co/api/v2/move/363/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
      ],
    },
    {
      move: {
        name: "pluck",
        url: "https://pokeapi.co/api/v2/move/365/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "tailwind",
        url: "https://pokeapi.co/api/v2/move/366/",
      },
      version_group_details: [
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 47,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "u-turn",
        url: "https://pokeapi.co/api/v2/move/369/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "air-slash",
        url: "https://pokeapi.co/api/v2/move/403/",
      },
      version_group_details: [
        {
          level_learned_at: 57,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 39,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "lets-go-pikachu-lets-go-eevee",
            url: "https://pokeapi.co/api/v2/version-group/19/",
          },
        },
        {
          level_learned_at: 57,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "defog",
        url: "https://pokeapi.co/api/v2/move/432/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "captivate",
        url: "https://pokeapi.co/api/v2/move/445/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "diamond-pearl",
            url: "https://pokeapi.co/api/v2/version-group/8/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
      ],
    },
    {
      move: {
        name: "ominous-wind",
        url: "https://pokeapi.co/api/v2/move/466/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "platinum",
            url: "https://pokeapi.co/api/v2/version-group/9/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "tutor",
            url: "https://pokeapi.co/api/v2/move-learn-method/3/",
          },
          version_group: {
            name: "heartgold-soulsilver",
            url: "https://pokeapi.co/api/v2/version-group/10/",
          },
        },
      ],
    },
    {
      move: {
        name: "round",
        url: "https://pokeapi.co/api/v2/move/496/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
    {
      move: {
        name: "work-up",
        url: "https://pokeapi.co/api/v2/move/526/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "hurricane",
        url: "https://pokeapi.co/api/v2/move/542/",
      },
      version_group_details: [
        {
          level_learned_at: 62,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-white",
            url: "https://pokeapi.co/api/v2/version-group/11/",
          },
        },
        {
          level_learned_at: 62,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "black-2-white-2",
            url: "https://pokeapi.co/api/v2/version-group/14/",
          },
        },
        {
          level_learned_at: 62,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 62,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 62,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 62,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
        {
          level_learned_at: 62,
          move_learn_method: {
            name: "level-up",
            url: "https://pokeapi.co/api/v2/move-learn-method/1/",
          },
          version_group: {
            name: "brilliant-diamond-and-shining-pearl",
            url: "https://pokeapi.co/api/v2/version-group/23/",
          },
        },
      ],
    },
    {
      move: {
        name: "confide",
        url: "https://pokeapi.co/api/v2/move/590/",
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "x-y",
            url: "https://pokeapi.co/api/v2/version-group/15/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "omega-ruby-alpha-sapphire",
            url: "https://pokeapi.co/api/v2/version-group/16/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "sun-moon",
            url: "https://pokeapi.co/api/v2/version-group/17/",
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/",
          },
          version_group: {
            name: "ultra-sun-ultra-moon",
            url: "https://pokeapi.co/api/v2/version-group/18/",
          },
        },
      ],
    },
  ],
  name: "pidgeotto",
  order: 22,
  // past_abilities: [],
  past_types: [],
  species: {
    name: "pidgeotto",
    url: "https://pokeapi.co/api/v2/pokemon-species/17/",
  },
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/17.png",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    front_female: null,
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/17.png",
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
        front_female: null,
      },
      home: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/17.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/17.png",
        front_shiny_female: null,
      },
      "official-artwork": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
        // front_shiny:
        //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/17.png",
      },
      // showdown: {
      //   back_default:
      //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/17.gif",
      //   back_female: null,
      //   back_shiny:
      //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/17.gif",
      //   back_shiny_female: null,
      //   front_default:
      //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/17.gif",
      //   front_female: null,
      //   front_shiny:
      //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/17.gif",
      //   front_shiny_female: null,
      // },
    },
    versions: {
      "generation-i": {
        "red-blue": {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/17.png",
          back_gray:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/17.png",
          back_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/17.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/17.png",
          front_gray:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/17.png",
          front_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/17.png",
        },
        yellow: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/17.png",
          back_gray:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/17.png",
          back_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/17.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/17.png",
          front_gray:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/17.png",
          front_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/17.png",
        },
      },
      "generation-ii": {
        crystal: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/17.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/17.png",
          back_shiny_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/17.png",
          back_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/17.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/17.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/17.png",
          front_shiny_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/17.png",
          front_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/17.png",
        },
        gold: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/17.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/17.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/17.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/17.png",
          front_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/17.png",
        },
        silver: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/17.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/17.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/17.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/17.png",
          front_transparent:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/17.png",
        },
      },
      "generation-iii": {
        emerald: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/17.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/17.png",
        },
        "firered-leafgreen": {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/17.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/17.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/17.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/17.png",
        },
        "ruby-sapphire": {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/17.png",
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/17.png",
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/17.png",
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/17.png",
        },
      },
      "generation-iv": {
        "diamond-pearl": {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/17.png",
          back_female: null,
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/17.png",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/17.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/17.png",
          front_shiny_female: null,
        },
        "heartgold-soulsilver": {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/17.png",
          back_female: null,
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/17.png",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/17.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/17.png",
          front_shiny_female: null,
        },
        platinum: {
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/17.png",
          back_female: null,
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/17.png",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/17.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/17.png",
          front_shiny_female: null,
        },
      },
      "generation-v": {
        "black-white": {
          animated: {
            back_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/17.gif",
            back_female: null,
            back_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/17.gif",
            back_shiny_female: null,
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/17.gif",
            front_female: null,
            front_shiny:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/17.gif",
            front_shiny_female: null,
          },
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/17.png",
          back_female: null,
          back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/17.png",
          back_shiny_female: null,
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/17.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/17.png",
          front_shiny_female: null,
        },
      },
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/17.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/17.png",
          front_shiny_female: null,
        },
        "x-y": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/17.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/17.png",
          front_shiny_female: null,
        },
      },
      "generation-vii": {
        icons: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/17.png",
          front_female: null,
        },
        "ultra-sun-ultra-moon": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/17.png",
          front_female: null,
          front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/17.png",
          front_shiny_female: null,
        },
      },
      "generation-viii": {
        icons: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/17.png",
          front_female: null,
        },
      },
    },
  },
  stats: [
    {
      base_stat: 63,
      effort: 0,
      stat: {
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 60,
      effort: 0,
      stat: {
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 55,
      effort: 0,
      stat: {
        name: "defense",
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 50,
      effort: 0,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 71,
      effort: 2,
      stat: {
        name: "speed",
        url: "https://pokeapi.co/api/v2/stat/6/",
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: "normal",
        url: "https://pokeapi.co/api/v2/type/1/",
      },
    },
    {
      slot: 2,
      type: {
        name: "flying",
        url: "https://pokeapi.co/api/v2/type/3/",
      },
    },
  ],
  weight: 300,
};

export default mockDetailPidgeotto;
