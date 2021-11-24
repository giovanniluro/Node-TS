import { Specification } from "../../models/Specification";
import { ISpecificationDTO, ISpecificationRepository } from "./ISpecificationsRepositry";

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ description, name }: ISpecificationDTO): Specification {
    const newSpecification = new Specification({ name, description });
    this.specifications.push(newSpecification);
    return newSpecification;
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specificationExists = this.specifications.find(specification => specification.name === name);
    return specificationExists;
  }
}

export { SpecificationsRepository }