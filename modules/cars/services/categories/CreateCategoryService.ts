import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../../repositories/Category/ICategoriesRepository";

interface IExecute {
  name: string
  description: string
}

class CreateCategoryService {
  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute({description, name}: IExecute) {
    const categoryExists: Category = this.categoriesRepository.findByName(name);

    if (categoryExists) {
      throw Error("Category already exists");
    }

    const newCategory: Category = this.categoriesRepository.create({ description, name });

    return newCategory;
  }
}

export { CreateCategoryService };