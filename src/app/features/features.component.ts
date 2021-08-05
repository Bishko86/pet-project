import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpDataService } from '../service/http-data.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})

export class FeaturesComponent implements OnInit {
  loader: boolean = false;
  error: string = ''
  constructor(private httpDataService: HttpDataService) { }
  form: FormGroup = new FormGroup({
    search: new FormControl('')
  });
  featuresData = this.httpDataService;

  loadingData() {
    this.loader = true
    this.httpDataService.fetchData().subscribe(() => {
      this.loader = false;
    }, (error) => {
      this.error = error.message
      this.loader = false;
    }
    )
  }
  ngOnInit() {
    this.loadingData();
  }
}
