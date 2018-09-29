import { Component, OnInit } from '@angular/core';
import { CITIES } from '../city/cities'
import { City } from '../city/city'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  cities: Array<City> = CITIES;
  constructor() { }

  ngOnInit() {
  }

}
