import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PokemonComponent} from './pokemon.component';
import {ROUTE_EMPTY, ROUTE_TO_POKEMON_LIST} from '../../utils/constants';

const routes: Routes = [
  {
    path: ROUTE_EMPTY,
    component: PokemonComponent,
    children: [
      {
        path: ROUTE_EMPTY,
        pathMatch: 'full',
        redirectTo: ROUTE_TO_POKEMON_LIST,
      },
      {
        path: ROUTE_TO_POKEMON_LIST,
        loadChildren: (() =>
            import('./pokemon-list/pokemon-list.module').then(
              (m) => m.PokemonListModule)
        )
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PokemonRoutingModule {
}
