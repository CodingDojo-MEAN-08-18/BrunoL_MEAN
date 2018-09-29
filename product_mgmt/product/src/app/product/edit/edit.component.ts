import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product: Product;// = new Product(0, 'camera', 150);
  loaded: Boolean = false; // TODO: getProducts should return a 404 if not found

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router
    //private _location: Location
    ) {
        this._route.paramMap.subscribe( params => {
        let _id: string = params.get('id');
        _productService.getProducts((result) => {
          if(result){
            this.product = result;
            this.loaded = true;
            // console.log('retrieved product', this.product);
          }else{
            console.log('not found')
          }

        }, _id);
      })
   }

  ngOnInit() {
  }
  // https://angular.io/guide/router#milestone-3-wrap-up
  // see hero-detail.component.ts
  updateProduct(){
    console.log('updating', this.product);
    this._productService.updateProduct(this.product)
  }

  deleteProduct(){
    let sure = confirm('Are you sure you would like to delete this product?');
    if(sure){
      console.log('deleting', this.product);
      this._productService.deleteProduct(this.product._id);
    }

  }
}
