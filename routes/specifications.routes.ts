import { Request, Response, Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/Specification/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoute = Router();
const specificationsRepository = new SpecificationsRepository();
const createSpecificationService = new CreateSpecificationService(specificationsRepository);

specificationsRoute.post('/', (req: Request, res: Response) => {
  try {
    const { description, name } = req.body;

    const specification = createSpecificationService.execute({ description, name });

    return res.json(specification);

  } catch (err) {
    return res.status(400).json({
      message: err.message
    })
  }
});

specificationsRoute.get('/', (req: Request, res: Response) => {
  return res.json(specificationsRepository.list());
});

export { specificationsRoute }