import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr'
import localeFrExtra from '@angular/common/locales/extra/fr'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { HeroComponent } from './hero/hero.component';

// registerLocaleData(localeFr,'fr-FR',localeFrExtra);
const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroComponent,
    data: { title: 'Heroes List' }
  }
];


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
