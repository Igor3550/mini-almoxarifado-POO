import { Category } from "../models/Category";

export class CategoryRepository{
  private categories: Category[];
  private static INSTANCE: CategoryRepository;

  constructor (){
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if(!this.INSTANCE) this.INSTANCE = new CategoryRepository();
    return this.INSTANCE;
  }

  create({ id, name }: Category): void {
    const category:Category = new Category(id, name);
    this.categories.push(category);
  }

  getAll(): Category[] {
    const categories = this.categories;
    if(!categories) throw new Error('Empty categoies list!')
    return categories;
  }
}