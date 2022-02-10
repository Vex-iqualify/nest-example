import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

// see https://docs.nestjs.com/controllers

// Define namespace of routes to handle
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Define individual function for specific subroute and method, such as GET /products/:productId
  @Get(':productId')
  getHello(): any {
    // Handle business logic in a service to keep route controllers clean
    return this.productsService.getProducts();
  }
}
