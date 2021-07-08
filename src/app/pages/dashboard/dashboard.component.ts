import { Component, OnInit } from '@angular/core';
import { CardHomeMock } from 'src/app/mocks/card-home.mock';
import { HomeCardModel } from 'src/app/models/home-card.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public cardHomeConfig: HomeCardModel = CardHomeMock.getInitialDataCardHome();

  constructor() { }

  ngOnInit(): void {
  }

}
