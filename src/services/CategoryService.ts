import { Category } from "../models/Category";
import { CategoryRepository } from "../repositories/CategoryRepository";

export class CategoryService {
  constructor(private categoryRepository: CategoryRepository ){}

  create(name: string): void {
    if(!name) throw new Error("Invalid input!");
    this.categoryRepository.create({name});
  }

  list(): Category[]{
    const categoryList = this.categoryRepository.getAll();
    return categoryList;
  }

  update({id, name}: Category): void {
    this.categoryRepository.update({id, name});
  }

  delete(id: number): void {
    if(!id) throw new Error("Invalid input!");
    this.categoryRepository.delete(id);
  }
}