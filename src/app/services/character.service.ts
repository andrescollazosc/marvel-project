import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from "../models/result.model";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private BASE_URL = environment.baseUrl;
  //https://gateway.marvel.com/v1/public/characters?ts=1624327724&apikey=e75d75d77b6aa2c5b313810cc7f4e0b9&hash=f3b12d423ffb036b4ec68fac285aa6f9

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${this.BASE_URL}v1/public/characters?ts=1624327724&apikey=e75d75d77b6aa2c5b313810cc7f4e0b9&hash=f3b12d423ffb036b4ec68fac285aa6f9`);
  }
}
