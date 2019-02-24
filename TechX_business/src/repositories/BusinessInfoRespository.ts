import { Service } from "typedi";
import { getDb } from "../utils/dbConnection";


import BusinessInfo from '../models/db/BusinessInfo';
import BusinessInfoRespone from '../models/response/BusinessInfoResponse';

@Service()
export class BusinessInfoRepository {

  public findAll(filter:any, limit: number, skip:number): Promise<BusinessInfo[]> {
      console.log("2333333333333333333333");
      
    return new Promise((resolve: Function, reject: Function) => {
      getDb().collection("t_tradex_business_info").find({filter}).limit(limit).skip(skip).toArray((err: any, result: BusinessInfo[]) => {
        if (err) {
          
          //   const response : BusinessInfoRespone []= [];
          //  response[i].accountReceivable =  result[i].account_available;
            //cover result tu businessInfo to DB
          reject(err);
        } else {
            console.log("444444444444444444");
            
          resolve(result);
        }
      });
    });
  }
}
