import { Request, Response, Router } from "express";
import { SpecificationsController } from "../modules/cars/controllers/specifications/SpecificationsController";

const specificationsRoute = Router();
const specificationsController = SpecificationsController.getInstance();

specificationsRoute.post('/', (req: Request, res: Response) => {
  try {
    const { description, name } = req.body;

    const specification = specificationsController.createSpecification({ description, name });

    return res.json(specification);

  } catch (err) {
    return res.status(400).json({
      message: err.message
    })
  }
});

specificationsRoute.get('/', (req: Request, res: Response) => {
  return res.json(specificationsController.listSpecifications());
});

export { specificationsRoute }