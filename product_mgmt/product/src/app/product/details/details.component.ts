import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() product: Product;

  constructor(private _location: Location ) { }

  ngOnInit() {

  }

  goBack(e: Event): void {
      var sure = confirm("Are you sure you'd like to leave this page? Any changes will not be saved.");
      // console.log('this in goBack()', this);
      // "this" refers to the DetailsComponent. has attributes _location and Product
      //console.log('this._location',  this._location.go);
      if(sure){
        this._location.back();
      }else{
        e.preventDefault();
      }

  }

}
