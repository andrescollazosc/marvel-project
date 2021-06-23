import { MainMenuModel } from '../models/main-menu.model';

export class MainMenuMock {
    public static getItemsMenu(): MainMenuModel[]{
        return [
            {
                routerPath: 'home',
                labelItem: 'home'
            },
            {
                routerPath: 'dash',
                labelItem: 'DashBoard'
            },
            {
                routerPath: 'characters',
                labelItem: 'Characters'
            }
        ];
    }

}