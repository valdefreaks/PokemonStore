import {Injectable} from '@angular/core';
import {NamedAPIResource, Pokemon, PokemonClient} from 'pokenode-ts';
import {LIMIT_API_RESULTS} from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  api: PokemonClient;
  offset: number;
  limit: number;

  constructor() {
    this.api = new PokemonClient();
    this.offset = 0;
    this.limit = LIMIT_API_RESULTS;
  }

  // Get de pokemon list.
  async getPokemonList(): Promise<Array<IPokemon>> {
    const response = await this.api.listPokemons(this.offset, this.limit);
    this.offset++;
    const pokemonList = response.results as Array<IPokemon>;

    for (const pokemon of pokemonList) {
      const tempPokemon = await this.api.getPokemonByName(pokemon.name);
      pokemon.Image = tempPokemon.sprites.front_default;
    }
    return pokemonList;
  }
}

export interface IPokemon extends NamedAPIResource {
  Image?: string;
}
