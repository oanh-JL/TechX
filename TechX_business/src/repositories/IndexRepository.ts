import { Service } from "typedi";
import { getDb } from "../utils/dbConnection";
import Index from "../models/db/Index";
import { COLLECTIONS_NAME } from "../constants";

@Service()
export class IndexRepository {

  public findAll(): Promise<Index[]> {
    return new Promise((resolve: Function, reject: Function) => {
      getDb().collection(COLLECTIONS_NAME.INDEX).find({}).toArray((err: any, result: Index[]) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}
