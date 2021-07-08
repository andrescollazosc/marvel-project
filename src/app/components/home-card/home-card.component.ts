import { Component, Input, OnInit } from '@angular/core';
import { HomeCardModel } from 'src/app/models/home-card.model';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnInit {
  @Input() configCard: HomeCardModel = {};

  constructor() {}

  ngOnInit(): void {
    if (!this.configCard) {
      throw new Error('The property [configCard] is mandatory.');
    }
  }
}
