import { Component } from '@angular/core';
import { SetLanguageService } from 'src/app/service/set-language.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private translate: SetLanguageService) { }
  translator = this.translate;
}