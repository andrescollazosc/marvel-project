import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCardsComponent } from './components/first-cards/first-cards.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { MainMenuDesktopComponent } from './components/main-menu-desktop/main-menu-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCardsComponent,
    CharactersComponent,
    DashboardComponent,
    MainMenuDesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
