import { CategoryRepository } from '../../repositories/CategoryRepository';
import { CategoryService } from '../../services/CategoryService';
import { CategoryController } from './CategoryController';

const categoryRepository = new CategoryRepository();
const categoryService = new CategoryService(categoryRepository);
export const categoryController = new CategoryController(categoryService);
