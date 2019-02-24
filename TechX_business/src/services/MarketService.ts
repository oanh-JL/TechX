import { Inject, Service } from "typedi";
import { Observable, Subject } from "rx";
import { IndexRepository } from "../repositories/IndexRepository";
import IndexResponse, { parseToListMarketIndexResponse } from "../models/response/IndexResponse";
import Index from "../models/db/Index";
import { Logger, Utils } from "tradex-common";
import { BusinessInfoRepository } from '../repositories/BusinessInfoRespository';
import BusinessInfoRespone, { parseToListMarketBusinessInfoResponse } from '../models/response/BusinessInfoResponse';
import BusinessInfo from '../models/db/BusinessInfo';


@Service()
export default class MarketService {
  @Inject()
  public indexRepository: IndexRepository;
  @Inject()
  public businessInfoRespository: BusinessInfoRepository;
  


  public queryIndexList(): Observable<IndexResponse[]> {
    const subject: Subject<IndexResponse[]> = new Subject();
    Utils.transformSinglePromise(subject, new Promise<IndexResponse[]>((resolve: Function, reject: Function) => {
      this.indexRepository.findAll().then((indexList: Index[]) => {
        indexList.sort((i1: Index, i2: Index) => i1.isHighlight - i2.isHighlight);
        resolve(parseToListMarketIndexResponse(indexList));
      }).catch((error: any) => {
        Logger.error(error);
        reject(error);
      });
    }));
    return subject;
  }

  public queryBusinessInfoList(): Observable<BusinessInfoRespone[]> {
    const subject: Subject<BusinessInfoRespone[]> = new Subject();
    console.log("22222222222222222");
    
    Utils.transformSinglePromise(subject, new Promise<BusinessInfoRespone[]>((resolve: Function, reject: Function) => {
      this.businessInfoRespository.findAll().then((businessInfoList: BusinessInfo[]) => {
       console.log(JSON.stringify(businessInfoList));
        resolve(parseToListMarketBusinessInfoResponse(businessInfoList));
      }).catch((error: any) => {
        Logger.error(error);
        reject(error);
      });
    }));
    return subject;
  }
}