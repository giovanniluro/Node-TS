interface ICreateCategoryDTO {
  description: string;
  name: string;
}

interface IImportCategoriesDTO {
  file: Express.Multer.File;
}

export { ICreateCategoryDTO , IImportCategoriesDTO}