import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private translate: TranslateService) {
  }
  changeLang: boolean = false
  langFirst: string = 'En'
  langSecond: string = 'Ua'

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
  }
  toggleListLang() {
    this.changeLang = !this.changeLang
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }
  chooseLang(language: string) {
    if (language === "Ua") {
      this.langFirst = "Ua";
      this.langSecond = "En";
    }
    else {
      this.langFirst = "En";
      this.langSecond = "Ua";
    }
    this.toggleListLang()
    this.useLanguage(language.toLocaleLowerCase())
  }
}