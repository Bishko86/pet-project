import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FeaturesDataService, FeaturesDataType } from '../service/features-data.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  constructor(private featuresDataService:FeaturesDataService){}
  form: FormGroup = new FormGroup ({
    search: new FormControl('')
  })
  featuresData = this.featuresDataService
  ngOnInit(): void {
  }

}
