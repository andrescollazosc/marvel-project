import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCardsComponent } from './components/first-cards/first-cards.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { MainMenuDesktopComponent } from './components/main-menu-desktop/main-menu-desktop.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCardsComponent,
    CharactersComponent,
    DashboardComponent,
    MainMenuDesktopComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
