import { Component, OnInit } from '@angular/core';
import { CardCreatorsV1Mock } from 'src/app/mocks/card-creators-v1.mock';
import { CardCreatorsV1Model } from 'src/app/models/card-creators-v1.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  public cardConfig: CardCreatorsV1Model[] = CardCreatorsV1Mock.getCreators();

  constructor() {}

  ngOnInit(): void {}
}
