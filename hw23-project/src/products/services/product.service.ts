import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { IProduct } from '../interfaces/product.interface';

@Injectable()
export class ProductService {
    constructor(
        @Inject('ProductModelToken') private readonly productModel: Model<IProduct>,
    ){}

    async addProduct(product: IProduct) {
        return await this.productModel.create(product);
    }

    async getAllProducts() {
        return await this.productModel.find().lean().exec();;
    }

    async getSingleProduct(id: string) {
        return await this.productModel.findOne({_id: id}).lean().exec();
    }

    async removeProduct(id: string) {
        return await this.productModel.remove({_id: id}).lean().exec();
    }

    async updateProduct(id: string, product: IProduct) {
        return await this.productModel.update({
                _id: id
            },
            {
                $set :
                    {
                        "name" : product.name,
                        "price" : product.price,
                        "country" : product.country
                    }
            }
        )
    }

}