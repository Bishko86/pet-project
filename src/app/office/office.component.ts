import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../service/data-office.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit {
  @Input() data: DataService = { link: '', text: '',title: '' }
  @Input() block: boolean | undefined;
  @Input() textStyle: boolean | undefined;
 
  constructor() { }

  ngOnInit(): void {
  }

}
