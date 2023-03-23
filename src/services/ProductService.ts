import { Product } from "../models/Product";
import { ProductRepository } from "../repositories/ProductRepository";

export class ProductService {
  constructor(private productRepository: ProductRepository ){}

  create({name, categoryId}: Product): void {
    if(!name || !categoryId) throw new Error("Invalid input!");
    this.productRepository.create({name, categoryId});
  }

  list(): Product[]{
    const categoryList = this.productRepository.getAll();
    return categoryList;
  }

  update({id, name, categoryId}: Product): void {
    if(!id) throw new Error("Invalid input!");
    this.productRepository.update({id, name, categoryId});
  }

  delete(id: number): void {
    if(!id) throw new Error("Invalid input!");
    this.productRepository.delete(id);
  }
}