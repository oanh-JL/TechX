import BusinessInfo from '../db/BusinessInfo';


export const parseToListMarketBusinessInfoResponse = (indexList: BusinessInfo[]): BusinessInfoRespone[] => {
  const responses: BusinessInfoRespone[] = [];
  if (indexList != null) {
    indexList.forEach((index: BusinessInfo) => {
      const response: BusinessInfoRespone = new BusinessInfoRespone();
      response._id = index._id;
      response.code = index.code;
      response.quarter = index.quarter;
      response.year = index.year;
      response.accountReceivable = index.accountReceivable ;
      responses.push(response);
    });
  }
   console.log("12234455");
   
  console.log(JSON.stringify(responses));
  
  return responses;
}

export default class BusinessInfoRespone {
  public _id: string;
  public code: string;
  public quarter: string;
  public year: Number;
  public accountReceivable: string;
}
