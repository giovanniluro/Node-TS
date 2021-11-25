import { Category } from "../../models/Category";
import { ICategoriesRepository, ICategoryDTO } from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICategoryDTO): Category {
    const category = new Category({ name, description })
    this.categories.push(category);
    return category;
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    const categoryExists = this.categories.find(category => category.name === name);
    return categoryExists;
  }
}

export { CategoriesRepository };