import { Component } from '@angular/core';
import { MainMenuMock } from './mocks/main-menu.mock';
import { MainMenuModel } from './models/main-menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public mainMenuModel: MainMenuModel[] = MainMenuMock.getItemsMenu();
  
  title = 'Train-Marvel';



}
