import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-first-cards',
  templateUrl: './first-cards.component.html',
  styleUrls: ['./first-cards.component.scss']
})
export class FirstCardsComponent implements OnInit {

  @Input() urlImage: string="";
  @Input() extension: string ="";
  @Input() title: string ="";

  public pathImg: string ="";

  constructor() {}

  ngOnInit(): void {
    if (this.urlImage === "" || this.urlImage === null) {
      this.pathImg="../assets/img/Marvel-comics-logo-vector.png";
    }else {
      this.pathImg = `${this.urlImage}.${this.extension}`;
    }
  }

}
