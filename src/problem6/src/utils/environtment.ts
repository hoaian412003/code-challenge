import dotenv from 'dotenv';
dotenv.config();

export class Environtment {

  public readonly MongoURI: string = process.env.MONGO_URI || 'mongodb://localhost:27017/myapp';
  public readonly Port: number = Number(process.env.PORT) || 3000;

}

export const environtment = new Environtment();
