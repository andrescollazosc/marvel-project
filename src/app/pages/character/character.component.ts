import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { HomeCardModel } from '../../models/home-card.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  public resultModel: HomeCardModel={};

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  private getCharacter():void {
    this.resultModel=this.characterService.getCharacter();
  }

}
