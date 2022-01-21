import {Component, OnInit} from '@angular/core';
import {IPokemon, PokemonService} from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonList: Array<IPokemon>;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.getPokemonList().then((results: Array<IPokemon>) => {
      this.pokemonList = results;
      console.log(this.pokemonList);
    });

  }

  getPokemonList() {
    return this.pokemonService.getPokemonList();
  }

}
