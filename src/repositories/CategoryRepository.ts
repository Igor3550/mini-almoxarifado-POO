import { Category } from "../models/Category";
import prisma from "../database/db";

export class CategoryRepository{

  async create({ name }: Category<number>): Promise<void> {
    await prisma.category.create({
      data:{
        name
      }
    });
  }

  async getAll(): Promise<Category<number>[]> {
    return await prisma.category.findMany();
  }

  async update({id, name}: Category<number>): Promise<void> {
    await prisma.category.update({
      where:{
        id
      },
      data:{
        name
      }
    });
  }

  async delete(id: number): Promise<void> {
    await prisma.category.delete({
      where:{
        id
      }
    });
  }

  async getCategoryById(id:number): Promise<Category<number>> {
    const category = await prisma.category.findFirst({
      where:{
        id
      }
    });
    if(!category) throw new Error("Category not found!")
    return category;
  }
}