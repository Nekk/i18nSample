import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  minutes = 0;
  gender = 'female';
  fly = true;
  logo = 'https://angular.io/assets/images/logos/angular/angular.png';
  heroes: string[] = ['Magneta', 'Celeritas', 'Dynama'];
  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }
  male() { this.gender = 'male'; }
  female() { this.gender = 'female'; }
  other() { this.gender = 'other'; }

  onClickChangeLanguage(lang) {
    switch (lang) {
      case "en":
        window.localStorage.setItem("localeValue", "en")
        break;
      case "th":
        window.localStorage.setItem("localeValue", "th")
        break;
      case "fr":
        window.localStorage.setItem("localeValue", "fr")
        break;
    }
    location.reload()
  }
}

