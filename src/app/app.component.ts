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
    this.translate.initialSetup();
  }

  // onActivate(event:any) {
  //   window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
    
// }
}
