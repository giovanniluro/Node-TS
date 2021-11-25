import { ISpecificationRepository } from "../../repositories/Specification/ISpecificationsRepositry";

interface IExecute {
  name: string
  description: string
}

class CreateSpecificationService {
  private specificationsRepository: ISpecificationRepository;

  constructor(specificationsRepository: ISpecificationRepository) {
    this.specificationsRepository = specificationsRepository;
  }

  execute({ description, name }: IExecute) {
    const specificationExists = this.specificationsRepository.findByName(name);

    if (specificationExists) {
      throw new Error("Specification already exists!");
    }

    const newSpecification = this.specificationsRepository.create({ description, name });

    return newSpecification;
  }
}

export { CreateSpecificationService };