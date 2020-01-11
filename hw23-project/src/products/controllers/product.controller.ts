import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { IProduct } from '../interfaces/product.interface';

@Controller('/products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    // @Post()
    // addProduct(productObject: IProduct) {
    //     return this.productService.addProduct(productObject);
    // }

    @Post()
    async addProduct(@Body() productObject: IProduct ) {
        return await this.productService.addProduct(productObject);
    }

    @Get()
    async getAllProducts() {
        return await this.productService.getAllProducts();
    }

    @Get(':id')
    async getSingleProduct(@Param('id') prodID: string) {
        return await this.productService.getSingleProduct(prodID);
    }

    @Delete(':id')
    async removeProduct(@Param('id') prodID: string) {
        return await this.productService.removeProduct(prodID);
    }

    @Patch(':id')
    async updateProduct(
        @Param('id') prodID: string,
        @Body() productObject: IProduct
        ) {
        return await this.productService.updateProduct(prodID, productObject);
    }

}