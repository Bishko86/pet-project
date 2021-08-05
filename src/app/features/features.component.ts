import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FeaturesDataService } from '../service/features-data.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})

export class FeaturesComponent implements OnInit {
  loader: boolean = false;
  constructor(private featuresDataService: FeaturesDataService) { }
  form: FormGroup = new FormGroup({
    search: new FormControl('')
  });
  featuresData = this.featuresDataService;
  async ngOnInit() {
    if (this.featuresData.loadData.length === 0) {
      this.loader = true
      let result = await this.featuresDataService.initLoadedData(700)
      if (result) this.loader = false;
    }
    else {
      this.loader = false;
    }
  }
}
