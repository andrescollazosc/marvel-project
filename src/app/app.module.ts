import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCardsComponent } from './components/first-cards/first-cards.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { MainMenuDesktopComponent } from './components/main-menu-desktop/main-menu-desktop.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CardCreatorsV1Component } from './components/card-creators-v1/card-creators-v1.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCardsComponent,
    CharactersComponent,
    DashboardComponent,
    MainMenuDesktopComponent,
    HomeComponent,
    HomeCardComponent,
    AboutUsComponent,
    SpinnerComponent,
    CardCreatorsV1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
