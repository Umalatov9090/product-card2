import { Product } from './Product.js';

export class BeautyProduct extends Product {
  constructor({ skinType, ingredients, ...productData }) {
    super(productData);
    this.skinType = skinType;
    this.ingredients = ingredients;
  }
}
