import { Component, OnInit } from '@angular/core';
import { CardHomeMock } from 'src/app/mocks/card-home.mock';
import { HomeCardModel } from 'src/app/models/home-card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cardHomeConfig: HomeCardModel = CardHomeMock.getInitialDataCardHome();


  ngOnInit(): void {
  }

}
