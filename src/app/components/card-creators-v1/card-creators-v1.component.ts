import { Component, OnInit, Input } from '@angular/core';
import { CardCreatorsV1Model } from 'src/app/models/card-creators-v1.model';

@Component({
  selector: 'app-card-creators-v1',
  templateUrl: './card-creators-v1.component.html',
  styleUrls: ['./card-creators-v1.component.scss']
})
export class CardCreatorsV1Component implements OnInit {

  @Input() cardConfig: CardCreatorsV1Model = {};

  ngOnInit(): void {
    if (!this.cardConfig) {
      this.cardConfig = {
        img: '',
        name: 'Name',
        title: 'Title'
      };
    }
  }

}
