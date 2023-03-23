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

  create({ name }: Category): void {
    const id = this.categories.length+1;
    const category:Category = new Category(name, id);
    this.categories.push(category);
  }

  getAll(): Category[] {
    const categories = this.categories;
    if(!categories) throw new Error('Empty categoies list!')
    return categories;
  }

  update({id, name}: Category): void {
    const category = this.categories.find(category => category.id === id);
    if(!category) throw new Error("Category not found!")
    category.name = name;
  }

  delete(id: number): void {
    const categoryIndex = this.categories.findIndex(category => category.id === id);
    if(categoryIndex < 0) throw new Error("Category not found!")
    this.categories.splice(categoryIndex, 1);
  }
}