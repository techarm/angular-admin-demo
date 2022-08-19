import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { FlipCardModule } from './flip-card/flip-card.module';
import { RibbonCardModule } from './ribbon-card/ribbon-card.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    StatisticsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FlipCardModule, RibbonCardModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
