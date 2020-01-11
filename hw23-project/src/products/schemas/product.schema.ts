import * as mongoose from 'mongoose';

export const productSchema: any = new mongoose.Schema({
    name: String,
    price: Number,
    country: String,
});
