import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {
  urlbase: string = 'http://localhost:8000/api/products';

  constructor(private _http: Http) {
  }

  getProducts(callback, id?: string) {
    let url = id? this.urlbase+'/'+id : this.urlbase;

    this._http.get(url).subscribe(
      (response) => {
        response = response.json();
        console.log('got response', response);
        callback(response);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  createProduct(callback, product: Product){
    let url = this.urlbase;
    this._http.post(url, product).subscribe(
      (response) => {
        console.log('got response', response.json())
       },
       (err) => {
         console.log(err);
       }
      )
  }


  /* TODO: it's not possible to have a callback on a put or
  delete request. How to redirect user after successful update or
  delete? */
  updateProduct(product: Product){
    let url = this.urlbase + '/' + product._id;
    this._http.put(url, product).subscribe();
  }

  deleteProduct(_id: string){
    let url = this.urlbase + '/' + _id;
    this._http.delete(url).subscribe();
  }
}
