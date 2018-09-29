import { Component, OnInit } from '@angular/core';
import { DetailsComponent } from '../details/details.component'
import { Product } from '../product'
import { ProductService } from '../product.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Product = new Product() ;
  constructor(private _productService: ProductService) { }

  ngOnInit() {
  }

  createProduct(){
    console.log('creating', this.product);
    delete this.product._id;
    // _id will be null at first because we just created this product object from the form data.
    // use mongo to generate the _id:
    this._productService.createProduct(
      (result) => {
        console.log('create service result', result);
        },
      this.product
    )
  }

}
