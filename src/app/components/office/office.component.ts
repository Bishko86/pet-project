import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/service/data-office.service';


@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent {
  @Input() data: DataService = { link: '', text: '', title: '' }
  @Input() block: boolean | undefined;
  @Input() textStyle: boolean | undefined;
  @Input() textWeight: boolean | undefined;
}
