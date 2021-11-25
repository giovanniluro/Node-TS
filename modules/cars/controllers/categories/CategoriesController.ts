import { Category } from "../../models/Category";
import { ICategoriesRepository } from "../../repositories/Category/ICategoriesRepository"
import { CategoriesRepository } from "../../repositories/Category/implementations/CategoriesRepository";
import { CreateCategoryService } from "../../services/categories/CreateCategoryService";
import { ImportCategoriesService } from "../../services/categories/ImportCategoriesService";
import { ICreateCategoryDTO, IImportCategoriesDTO } from "./types/CategoriesController";

class CategoriesController {
  private categoriesRepository: ICategoriesRepository;
  private createCategoryService: CreateCategoryService;
  private importCategoriesService: ImportCategoriesService;
  private static INSTANCE: CategoriesController

  private constructor() {
    this.categoriesRepository = new CategoriesRepository();
    this.importCategoriesService = new ImportCategoriesService();
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

  importCategories({ file }: IImportCategoriesDTO) {
    this.importCategoriesService.execute(file);
    return this.categoriesRepository.list();
  }
};

export { CategoriesController }