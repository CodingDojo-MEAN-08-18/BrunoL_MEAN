import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { City } from './city'
import { WeatherService } from '../weather.service'
import { MapService } from '../map.service'
import { CITIES } from './cities'

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  city: City;
  img: string;
  weather: Object ;

  constructor(
    private _weatherService: WeatherService,
    private _imgService: MapService,
    private _route: ActivatedRoute,) {
    // console.log('inside city constructor')
    this._route.paramMap.subscribe( params => {
             let code = params.get('city');
             console.log('subscription triggered:',code);
             this.city = this.getCity(code);
             // console.log(this.city);
             this.getWeather();
             this.getImg();
           })
  }
  getCity(code: string){
    let idx = CITIES.map((x)=>{return x.code}).indexOf(code);
    return CITIES[idx]
  }
  getImg(){
    this._imgService.getMap((img) => {
      this.img = img;
    }, this.city);
  }
  getWeather() {

    this._weatherService.getWeather((weather) => {
      this.weather = weather;
      this.city.weatherLocation = weather.name; //  ("Seven Trees" used for San Jose)
    }, this.city);
  }

  ngOnInit() {
  }

}
