import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr'
import localeFrExtra from '@angular/common/locales/extra/fr'

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';

// registerLocaleData(localeFr,'fr-FR',localeFrExtra);

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
