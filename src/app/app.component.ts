import { Component, OnInit } from '@angular/core';
import { SetLanguageService } from './service/set-language.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent implements OnInit{
  constructor(private translate: SetLanguageService) {
  }
  ngOnInit(): void {
    this.translate.initialSetup()
  }
}
