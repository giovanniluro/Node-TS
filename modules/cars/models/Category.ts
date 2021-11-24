import { v4 as uuid } from 'uuid';

class Category {
  name: string;
  description: string;
  created_at: Date;
  id: string;

  constructor(name, description) {
    this.id = uuid();
    this.name = name;
    this.description = description;
    this.created_at = new Date();
  }
}

export { Category };