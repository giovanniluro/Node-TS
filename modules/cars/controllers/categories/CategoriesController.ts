import { Category } from "../../models/Category";
import { CategoriesRepository } from "../../repositories/Category/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/Category/ICategoriesRepository"
import { CreateCategoryService } from "../../services/CreateCategoryService";
import { ICreateCategoryDTO } from "./types/CategoriesController";

class CategoriesController {
  private categoriesRepository: ICategoriesRepository;
  private createCategoryService: CreateCategoryService
  private static INSTANCE: CategoriesController

  private constructor() {
    this.categoriesRepository = new CategoriesRepository();
    this.createCategoryService = new CreateCategoryService(this.categoriesRepository);
  }

  public static getInstance(): CategoriesController {
    if (!CategoriesController.INSTANCE) {
      CategoriesController.INSTANCE = new CategoriesController();
    }
    return CategoriesController.INSTANCE;
  }

  createCategory({ description, name }: ICreateCategoryDTO): Category {
    return this.createCategoryService.execute({ description, name });
  }

  listCategories(): Category[] {
    return this.categoriesRepository.list();
  }
};

export { CategoriesController }