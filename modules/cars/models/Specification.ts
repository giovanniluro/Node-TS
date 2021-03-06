import { v4 as uuid } from 'uuid';
import { ISpecificationDTO } from '../repositories/Specification/ISpecificationsRepositry';

class Specification {
  name: string;
  description: string;
  created_at: Date;
  id: string;

  constructor({ name, description }: ISpecificationDTO) {
    this.id = uuid();
    this.name = name;
    this.description = description;
    this.created_at = new Date();
  }
}

export { Specification };