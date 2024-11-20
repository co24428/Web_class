import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from '../services/product.service';
import { Product } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  // product: string = 'ball';
  products: Product[] = [];
  constructor(private productService: ProductService) {}
  // constructor() {}

  getProducts(): void {
    // console.log(this.productService);
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
    console.log(this.products);
    console.log(this.products[0].name);
  }

}
