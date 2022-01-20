import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {ROUTE_EMPTY} from '../../../utils/constants';

const routes: Routes = [
  {
    path: ROUTE_EMPTY,
    component: LoginComponent,
    data: {title: 'login'},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {
}
