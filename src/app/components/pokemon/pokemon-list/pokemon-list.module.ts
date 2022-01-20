import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonListComponent} from './pokemon-list.component';
import {PokemonListRoutingModule} from './pokemon-list-routing.module';


@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    PokemonListRoutingModule
  ],
  exports: [PokemonListComponent]
})
export class PokemonListModule {
}
