import { Specification } from "../../models/Specification";

interface ISpecificationDTO {
  description: string,
  name: string,
}

interface ISpecificationRepository {
  create({description, name}: ISpecificationDTO): Specification;
  list(): Specification[];
  findByName(name: string): Specification | undefined;
}


export {ISpecificationRepository, ISpecificationDTO}