import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';

import { WeatherService } from './weather.service';
import { MapService } from './map.service';
import { NavComponent } from './nav/nav.component';

import { KtoFPipe } from './ktof.pipe';
import { CapFirstPipe } from './cap-first.pipe'
@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    NavComponent,
    KtoFPipe,
    CapFirstPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WeatherService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
