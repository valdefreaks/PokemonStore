import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {CoreContainerComponent} from './components/core-container/core-container.component';
import {HeaderModule} from './components/shared/header/header.module';
import {SideBarModule} from './components/shared/side-bar/side-bar.module';
import {FooterModule} from './components/shared/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    CoreContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HeaderModule,
    SideBarModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
