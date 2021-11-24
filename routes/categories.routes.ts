import { Request, Response, Router } from 'express';
import { Category } from '../modules/cars/models/Category';
import { CategoryRepositories } from '../modules/cars/repositories/Category/CategoriesRepository';
import { ICategoriesRepository } from '../modules/cars/repositories/Category/ICategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoute = Router();
const categoriesRepository: ICategoriesRepository = new CategoryRepositories();
const createCategoryService = new CreateCategoryService(categoriesRepository);

categoriesRoute.post('/', (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    const newCategory: Category = createCategoryService.execute({ description, name });
  
    return res.json(newCategory);

  } catch (err) {
    return res.status(400).json({
      message: err.message
    });
  }
})

categoriesRoute.get('/', (req: Request, res: Response) => {
  return res.json(categoriesRepository.list());
});

export { categoriesRoute }