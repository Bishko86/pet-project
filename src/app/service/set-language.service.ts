import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SetLanguageService {
  constructor(private translate: TranslateService) {
  }
  changeLang: boolean = false;
  langSecond: string = '';

  initialSetup() {
    let lang = localStorage.getItem('lang');
    if (!lang) lang = 'en';
    this.langSecond = (lang === 'en') ? 'ua' : 'en';
    this.translate.setDefaultLang(lang);
  }
  private useLanguage(language: string): void {
    this.translate.use(language);
  }
  toggleListLang() {
    this.changeLang = !this.changeLang;
  }
  switchLanguage(language: string) {
    this.toggleListLang();
    this.useLanguage(language);
    localStorage.setItem('lang', language);
    (language === "ua") ?
      this.langSecond = "en" :
      this.langSecond = "ua";
  }
}
