import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LateralMenuComponent } from './lateral-menu/lateral-menu.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    NavbarComponent,
    LateralMenuComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
