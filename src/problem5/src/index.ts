import express from "express";
import { environtment } from "./utils/environtment";
import { DatabaseModule } from "./modules/database/module";
import { rootModule } from "./modules/root/root.module";



const bootstrap = async () => {

  // Connect to Database
  const database = new DatabaseModule({
    uri: environtment.MongoURI
  });

  await database.connect().then(() => {
    console.log("[DatabaseModule] Connected to Database");
  })


  const server = express();

  rootModule.register(server);

  // Establish Server
  const port = environtment.Port;
  server.listen(port, () => {
    console.log("Server is running on port ", port);
  })
}

bootstrap();
