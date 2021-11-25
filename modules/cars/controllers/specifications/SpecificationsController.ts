import { Specification } from "../../models/Specification";
import { ISpecificationRepository } from "../../repositories/Specification/ISpecificationsRepositry";
import { SpecificationsRepository } from "../../repositories/Specification/SpecificationsRepository";
import { CreateSpecificationService } from "../../services/CreateSpecificationService";
import { ICreateSpecificationDTO } from "./types/CategoriesController";

class SpecificationsController {
  private specificationsRepository: ISpecificationRepository;
  private createSpecificationsService: CreateSpecificationService;
  private static INSTANCE: SpecificationsController;

  private constructor() {
    this.specificationsRepository = new SpecificationsRepository();
    this.createSpecificationsService = new CreateSpecificationService(this.specificationsRepository);
  }

  public static getInstance() {
    if(!SpecificationsController.INSTANCE) {
      SpecificationsController.INSTANCE = new SpecificationsController();
    }
    return SpecificationsController.INSTANCE;
  }

  createSpecification({description, name}: ICreateSpecificationDTO): Specification {
    return this.createSpecificationsService.execute({description, name});
  }

  listSpecifications(): Specification[] {
    return this.specificationsRepository.list();
  }
}

export { SpecificationsController }