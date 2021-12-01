import { Request, Response, Router } from 'express';
import { CategoriesController } from '../modules/cars/controllers/categories/CategoriesController';
import { Category } from '../modules/cars/models/Category';
import multer from 'multer';

const upload = multer({
  dest: './tmp'
});

const categoriesRoute = Router();
const categoriesController = CategoriesController.getInstance();

categoriesRoute.post('/', (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    const newCategory: Category = categoriesController.createCategory({ description, name });

    return res.json(newCategory);

  } catch (err) {
    return res.status(400).json({
      message: err.message
    });
  }
})

categoriesRoute.get('/', (req: Request, res: Response) => {
  return res.json(categoriesController.listCategories());
});

categoriesRoute.post('/import', upload.single('fileUpload'), async (req: Request, res: Response) => {
  const { file } = req;
  const newCategories = await categoriesController.importCategories({ file });
  return res.status(200).json(newCategories);
})

export { categoriesRoute }