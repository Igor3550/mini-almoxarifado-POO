import { Product } from "../models/Product";
import { ProductRepository } from "../repositories/ProductRepository";

export class ProductService {
  constructor(private productRepository: ProductRepository ){}

  async create({name, categoryId}: Product<number>): Promise<void> {
    if(!name || !categoryId) throw new Error("Invalid input!");
    await this.productRepository.create({name, categoryId});
  }

  async list(): Promise<Product<number>[]>{
    const categoryList = await this.productRepository.getAll();
    return categoryList;
  }

  async update({id, name, categoryId}: Product<number>): Promise<void> {
    if(!id) throw new Error("Invalid input!");
    await this.productRepository.update({id, name, categoryId});
  }

  async delete(id: number): Promise<void> {
    if(!id) throw new Error("Invalid input!");
    await this.productRepository.delete(id);
  }
}