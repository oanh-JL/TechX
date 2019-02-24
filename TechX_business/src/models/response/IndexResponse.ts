import Index from '../db/Index';

export const parseToListMarketIndexResponse = (indexList: Index[]): IndexResponse[] => {
  const responses: IndexResponse[] = [];
  if (indexList != null) {
    indexList.forEach((index: Index) => {
      const response: IndexResponse = new IndexResponse();
      response.code = index._id;
      response.market = index.market;
      response.indexName = index.indexName;
      response.indexNameEn = index.indexNameEn;
      response.isHighlight = index.isHighlight !== 0 && index.isHighlight !== 1000;
      responses.push(response);
    });
  }
  return responses;
}

export default class IndexResponse {
  public code: string;
  public market: string;
  public indexName: string;
  public indexNameEn: string;
  public isHighlight: boolean;
}
