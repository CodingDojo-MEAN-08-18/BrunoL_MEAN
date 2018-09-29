import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { City } from './city/city'
import 'rxjs';

@Injectable()
export class MapService {

  map: Object;
  constructor(/*private _http: Http*/) {
  }

  getMap(callback, city: City){
     let apiKey: string = 'AIzaSyCgirrZd53Hpuef94B6uQwvBwyd8OrUvL0';
     let baseUrl: string = 'https://maps.googleapis.com/maps/api/staticmap';
     let center: string = city.name; // `${city.lat},${city.lon}`
     let url: string = `${baseUrl}?center=${center}&size=400x400&zoom=12&key=${apiKey}`;
     callback(url);

     /*this._http.get(url).subscribe(
      (response) => {
        this.map = response;//.json();
        console.log('got map', this.map);
        callback(this.map);
      },
      (err) => {
        console.log(err);
      }
      );*/
    }
}
