import { NamedAPIResource, Pokemon, PokemonClient } from "pokenode-ts";

function fetchAllKantoPokemon(): Promise<NamedAPIResource[]> {
  const api = new PokemonClient();
  return api.listPokemons(0, 151).then((response) => response.results);
}

function fetchPokemonDetail(pkmnNameOrId: string | number): Promise<Pokemon> {
  const api = new PokemonClient();
  if (typeof pkmnNameOrId === "number") {
    return api.getPokemonById(pkmnNameOrId);
  }

  return api.getPokemonByName(pkmnNameOrId);
}

export { fetchAllKantoPokemon, fetchPokemonDetail };
