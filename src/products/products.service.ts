import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private readonly products = {
    'novelty-t-shirt': {
      price: 16.99
    },
    'branded-mug': {
      price: 3.99
    }
  }

  // Function that can be called by a route controller
  getProducts(): any {
    return this.products;
  }}
