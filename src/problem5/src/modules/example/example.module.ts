import { ExampleController } from "./example.controller";
import Express from 'express';

export class ExampleModule {

  public router: Express.Router;
  public controller: ExampleController;

  constructor() {
    this.router = Express.Router();
    this.controller = new ExampleController(this.router)
  }

}

export const exampleModule = new ExampleModule();

