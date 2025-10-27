import Express, { Router } from 'express';
import { withDataValidation, withParamsValidation } from '../../middleware/validation';
import { createExampleSchema, deleteExampleSchema, getExampleSchema, getExamplesSchema, updateExampleSchema } from './example.schema';
import { ExampleService } from './example.service';


export class ExampleController {
  public router: Express.Router;
  public service: ExampleService;

  constructor(router: Express.Router) {
    this.router = router;
    this.service = new ExampleService();

    this.router.post("/example", withDataValidation(createExampleSchema.body), async (req, res) => {
      const result = await this.service.create(req.body);
      return res.json(result);
    })

    this.router.get("/example/:id", withParamsValidation(getExampleSchema.params), async (req, res) => {
      const result = await this.service.get(req.params as any);
      return res.json(result);
    })

    this.router.get("/examples", withDataValidation(getExamplesSchema.query), async (req, res) => {
      const result = await this.service.getAll(req.query as any);
      return res.json(result);
    })

    this.router.put("/example/:id", withParamsValidation(updateExampleSchema.params), withDataValidation(updateExampleSchema.body), async (req, res) => {
      const result = await this.service.update(req.params as any, req.body);
      return res.json(result);
    })

    this.router.delete("/example/:id", withParamsValidation(deleteExampleSchema.params), async (req, res) => {
      const result = await this.service.delete(req.params as any);
      return res.json(result);
    })
  }

}
