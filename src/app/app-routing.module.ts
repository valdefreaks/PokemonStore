import {RouterModule, Routes} from '@angular/router';
import {ROUTE_EMPTY, ROUTE_TO_LOGIN, ROUTE_TO_POKEMON, ROUTE_TO_SYSTEM} from './utils/constants';
import {CoreContainerComponent} from './components/core-container/core-container.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: ROUTE_EMPTY,
    redirectTo: ROUTE_TO_LOGIN,
    pathMatch: 'full',
  },
  {
    path: ROUTE_TO_LOGIN,
    loadChildren: () =>
      import('./components/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: ROUTE_TO_SYSTEM,
    component: CoreContainerComponent,
    // canActivate: [AuthGuardService],
    children: [
      {
        path: ROUTE_EMPTY,
        redirectTo: ROUTE_TO_POKEMON,
        pathMatch: 'full',
      },
      {
        path: ROUTE_TO_POKEMON,
        loadChildren: () =>
          import('./components/pokemon/pokemon.module').then(
            (m) => m.PokemonModule,
          ),
      },
    ],
  },
  {path: '**', redirectTo: ROUTE_TO_SYSTEM},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
