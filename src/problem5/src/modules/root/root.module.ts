import { ExampleModule, exampleModule } from "../example/example.module";
import { RootController } from "./root.controller";
import Express from "express";

export class RootModule {

  public controller: RootController;
  public prefix: string;

  constructor() {
    this.prefix = "/api/v1";
    const router = Express.Router();
    this.controller = new RootController(router);
  }

  register(app: Express.Express) {
    app.use(this.prefix, this.controller.router);
    app.use(this.prefix, exampleModule.controller.router);
  }
}

export const rootModule = new RootModule();
