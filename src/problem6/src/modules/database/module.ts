import mongoose from "mongoose";
let DatabaseInstance: DatabaseModule;

export class DatabaseModule {

  uri: string;
  dbInstance: mongoose.Connection;


  constructor(config: {
    uri: string;
  }) {
    this.uri = config.uri;
    this.dbInstance = mongoose.connection;
  }

  public async connect() {
    return await mongoose.connect(this.uri);
  }
}
export { DatabaseInstance };
