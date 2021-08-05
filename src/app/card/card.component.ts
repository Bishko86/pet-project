import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpDataService, JsonDataType } from '../service/http-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  item: JsonDataType | undefined
  constructor(private route: ActivatedRoute,
    private httpService: HttpDataService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.item = this.httpService.getById(+params.id)
    })
  }



}
