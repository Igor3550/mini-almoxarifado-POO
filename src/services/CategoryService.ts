import { Category } from "../models/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";

export class CategoryService {
  constructor(private categoryRepository: CategoryRepository ){}

  async create(name: string): Promise<void> {
    if(!name) throw new Error("Invalid input!");
    await this.categoryRepository.create({name});
  }

  async list(): Promise<Category<number>[]> {
    return await this.categoryRepository.getAll();
  }

  async getCategoryById(id: number): Promise<Category<number>> {
    return await this.categoryRepository.getCategoryById(id);
  }

  async update({id, name}: Category<number>): Promise<void> {
    if(!id || !name) throw new Error("No content")
    await this.categoryRepository.update({id, name});
  }

  async delete(id: number): Promise<void> {
    if(!id) throw new Error("Invalid input!");
    await this.categoryRepository.delete(id);
  }
}