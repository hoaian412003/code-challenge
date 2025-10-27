import { Example, exampleModel } from "./example.schema";

export class ExampleService {
  constructor() { }

  public create(body: Example) {
    return exampleModel.create(body);

  }

  public update(params: { id: string }, data: Partial<Example>) {
    return exampleModel.findByIdAndUpdate(params.id, data, { new: true });
  }

  public delete(params: { id: string }) {
    return exampleModel.findByIdAndDelete(params.id);
  }

  public get(params: { id: string }) {
    return exampleModel.findById(params.id);
  }

  public getAll(query: { page?: number; limit?: number; search?: string }) {
    const page = query.page || 1;
    const limit = query.limit || 10;
    const skip = (page - 1) * limit;

    const filter: any = {};
    if (query.search) {
      filter.$or = [
        { name: { $regex: query.search, $options: 'i' } },
        { description: { $regex: query.search, $options: 'i' } }
      ];
    }

    return exampleModel.find(filter).skip(skip).limit(limit);
  }
}
