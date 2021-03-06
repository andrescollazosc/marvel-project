import { Component, OnInit, Input } from '@angular/core';
import { MainMenuModel } from 'src/app/models/main-menu.model';

@Component({
  selector: 'app-main-menu-desktop',
  templateUrl: './main-menu-desktop.component.html',
  styleUrls: ['./main-menu-desktop.component.scss'],
})
export class MainMenuDesktopComponent implements OnInit {
  @Input() mainMenuModel: MainMenuModel[] = [];

  constructor() {}

  ngOnInit(): void {}

  public activeItem(value: MainMenuModel): void {
    const mainMenuIdex = this.mainMenuModel.findIndex(
      (x) => x.routerPath === value.routerPath
    );

    this.mainMenuModel.forEach((item, index) => {
      item.itemActivated = mainMenuIdex === index ? 'active' : '';
    });
  }
}
