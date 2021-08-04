import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FeaturesDataService } from '../service/features-data.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})

export class FeaturesComponent implements OnInit {
  loader: boolean = true;
  constructor(private featuresDataService: FeaturesDataService) { }
  form: FormGroup = new FormGroup({
    search: new FormControl('')
  });
  featuresData = this.featuresDataService;

  ngOnInit() {
    if (this.featuresData.loadData.length === 0) {
      this.featuresDataService.initLoadedData(2000).then((result) => {
        if (result) this.loader = false;
      })
    }
    else {
      console.log(this.featuresDataService.loadData);
      this.loader = false;
    }
  }
}
