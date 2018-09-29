import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Array<Product>;
  constructor(public _productService: ProductService) { }

  ngOnInit() {

    this._productService.getProducts((result) => {
      this.products = result;
    })
  }

}
