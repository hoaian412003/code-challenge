import Express from "express";

export class RootController {

  public router: Express.Router;

  constructor(router: Express.Router) {
    this.router = router;
    router.get("/health", (req, res) => {
      res.status(200).send("OK");
    });
  }
}
