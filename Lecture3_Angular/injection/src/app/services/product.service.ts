import { Injectable } from '@angular/core';

// import { Product } from '../product'
// import { PRODUCTS } from ../products'

@Injectable({
  providedIn: 'root'
})

export class Product {
  name: String
  constructor(
    name: String
  ){
    this.name = name;
  }
}

export class ProductService {

  constructor() { }
  getProducts(): Product[] { 
    let products = [
      new Product('p1'),
      new Product('p2'),
      new Product('p3'),
      new Product('p4'),
      new Product('p7'),
      new Product('p8'),
      new Product('p8'),
      new Product('p8'),
      new Product('p8'),
      new Product('p9')
    ];
    return products;
   }
}
