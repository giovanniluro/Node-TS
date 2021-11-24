import { Category } from "../../models/Category";

interface ICategoryDTO {
  description: string,
  name: string,
}

interface ICategoriesRepository {
  create({description, name}: ICategoryDTO): Category;
  list(): Category[];
  findByName(name: string): Category | undefined;
}


export {ICategoriesRepository, ICategoryDTO}