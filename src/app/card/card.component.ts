import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeaturesDataService, FeaturesDataType } from '../service/features-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  item:FeaturesDataType|undefined
  constructor(private route: ActivatedRoute,
    private featureService: FeaturesDataService, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.item = this.featureService.getById(+params.id)
    })
    console.log(  this.item);
    
  }

  

}
