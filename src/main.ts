import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

declare const require;

let localeValue = window.localStorage.getItem("localeValue");

if(!localeValue){
  localeValue = "en"
}

switch(localeValue){
  case "en":
    platformBrowserDynamic().bootstrapModule(AppModule);
    break;
  default:
    const translations = require(`raw-loader!./locale/messages.${ localeValue }.xlf`);
    platformBrowserDynamic().bootstrapModule(AppModule, {
      providers: [
        {provide: TRANSLATIONS, useValue: translations},
        {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'}
      ]
    });
    break;
}


