import { MainMenuModel } from '../models/main-menu.model';

export class MainMenuMock {
  public static getItemsMenu(): MainMenuModel[] {
    return [
      {
        routerPath: 'dash',
        labelItem: 'DashBoard',
      },
      {
        routerPath: 'characters',
        labelItem: 'Characters',
      },
      {
        routerPath: 'about-us',
        labelItem: 'About Us',
      },
    ];
  }
}
