import fs from 'fs';
import { parse as csvParse } from 'csv-parse';
import { Category } from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/Category/ICategoriesRepository';

class ImportCategoriesService {

  private categoriesRepository: ICategoriesRepository;

  constructor(categoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  loadCategories(file): Promise<Category[]> {
    return new Promise((resolve, reject) => {
      const categories = [];
      const stream = fs.createReadStream(file.path);

      const csvParser = csvParse();

      stream.pipe(csvParser);

      csvParser.on('data', (line) => {
        const [name, description] = line;
        categories.push({
          name,
          description
        });
      }).on('end', () => {
        resolve(categories);
      }).on('error', (err) => {
        reject(err);
      });
    });
  }
  async execute(file: Express.Multer.File) {
    const categories = await this.loadCategories(file);

    categories.map((category) => {
      const categoryExist = this.categoriesRepository.findByName(category.name);

      if (!categoryExist) {
        this.categoriesRepository.create({
          description: category.description,
          name: category.name
        });
      }
    })
    return categories;
  }
}

export { ImportCategoriesService }