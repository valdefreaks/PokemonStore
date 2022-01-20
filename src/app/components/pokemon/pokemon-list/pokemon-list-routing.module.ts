import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ROUTE_EMPTY} from '../../../utils/constants';
import {PokemonListComponent} from './pokemon-list.component';

const routes: Routes = [
  {
    path: ROUTE_EMPTY,
    component: PokemonListComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PokemonListRoutingModule {
}
