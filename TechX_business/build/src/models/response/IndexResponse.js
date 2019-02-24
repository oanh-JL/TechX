"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseToListMarketIndexResponse = (indexList) => {
    const responses = [];
    if (indexList != null) {
        indexList.forEach((index) => {
            const response = new IndexResponse();
            response.code = index._id;
            response.market = index.market;
            response.indexName = index.indexName;
            response.indexNameEn = index.indexNameEn;
            response.isHighlight = index.isHighlight !== 0 && index.isHighlight !== 1000;
            responses.push(response);
        });
    }
    return responses;
};
class IndexResponse {
}
exports.default = IndexResponse;
//# sourceMappingURL=IndexResponse.js.map