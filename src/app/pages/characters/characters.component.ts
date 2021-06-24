import { Component, OnInit } from '@angular/core';
import { ResponseModel, Result } from 'src/app/models/result.model';
import { CharacterService } from 'src/app/services/character.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  public response: ResponseModel={};
  public isLoading: boolean = false;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.characterService.getCharacters().pipe(
      finalize(() => {
        this.isLoading=true;
      })
    ).subscribe(result => {
      this.response = result;
    });
  }

}
