import { Product } from "../models/Product";

export class ProductRepository{
  private products: Product[];
  private static INSTANCE: ProductRepository;

  constructor() {
    this.products = [];
  }

  public static getInstance(): ProductRepository {
    if(!this.INSTANCE) this.INSTANCE = new ProductRepository();
    return this.INSTANCE;
  }

  create({ name, categoryId }:Product): void {
    const product = new Product(name, categoryId);
    this.products.push(product);
  }

  getAll():Product[] {
    const products = this.products;
    if(!products) throw new Error('Empty products list!');
    return products;
  }
}