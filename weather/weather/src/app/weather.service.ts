import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { City } from './city/city'
import 'rxjs';

@Injectable()
export class WeatherService {

  weather: Object;

  constructor(private _http: Http) {
  // console.log('inside weather service constructor')
  }

  /* // use a pipe instead
  KtoC(degreesKelvin: number){
    return degreesKelvin - 273.15
  }
  CtoF(degreesCelcius: number){
    return degreesCelcius*1.8 + 32;
  }
  KtoF(degreesKelvin: number){
    return this.CtoF(this.KtoC(degreesKelvin));
  }*/
  getWeather(callback, city:City) {
    // https://openweathermap.org/current#geo
    let apiKey: string = '54178bbaa6cdc9806737df15103cd026';
    let baseUrl: string = 'http://api.openweathermap.org/data/2.5/weather';
    // console.log('getWeather service', city);
    this._http.get(`${baseUrl}?lat=${city.lat}&lon=${city.lon}&appid=${apiKey}`).subscribe(
      (response) => {
        this.weather = response.json();
        console.log('got weather', this.weather);
        callback(this.weather);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
