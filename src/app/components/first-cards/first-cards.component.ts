import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Result } from '../../models/result.model';
import { HomeCardModel } from '../../models/home-card.model';

@Component({
  selector: 'app-first-cards',
  templateUrl: './first-cards.component.html',
  styleUrls: ['./first-cards.component.scss']
})
export class FirstCardsComponent implements OnInit {

  @Input() resultModel: Result={};

  @Output() homeCard = new EventEmitter<HomeCardModel>();

  public pathImg: string ="";

  ngOnInit(): void {
    if (this.resultModel.thumbnail?.path === "" || this.resultModel.thumbnail?.path === null) {
      this.pathImg="../assets/img/Marvel-comics-logo-vector.png";
    }else {
      this.pathImg = `${this.resultModel.thumbnail?.path}.${this.resultModel.thumbnail?.extension}`;
    }
  }

  public getCharacter(value: Result):void {
    const homeCardModel: HomeCardModel={
      title: value.name,
      description: value.description,
      img: this.pathImg
    };
    this.homeCard.emit(homeCardModel);
  }

}
