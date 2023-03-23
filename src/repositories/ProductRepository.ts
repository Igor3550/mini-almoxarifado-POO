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
    const id = this.products.length + 1;
    const product = new Product(name, categoryId, id);
    this.products.push(product);
  }

  getAll():Product[] {
    const products = this.products;
    if(!products) throw new Error('Empty products list!');
    return products;
  }

  update({id, name, categoryId}: Product): void {
    const product = this.products.find(product => product.id === id);
    if(!product) throw new Error("Product not found!");
    if(name) product.name = name;
    if(categoryId) product.categoryId = categoryId;
  }

  delete(id: number): void {
    const productIndex = this.products.findIndex(product => product.id === id);
    if(productIndex < 0) throw new Error("Product not found!")
    this.products.splice(productIndex, 1);
  }
}