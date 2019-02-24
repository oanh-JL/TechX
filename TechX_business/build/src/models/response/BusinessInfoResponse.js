"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseToListMarketBusinessInfoResponse = (indexList) => {
    const responses = [];
    if (indexList != null) {
        indexList.forEach((index) => {
            const response = new BusinessInfoRespone();
            response._id = index._id;
            response.code = index.code;
            response.quarter = index.quarter;
            response.year = index.year;
            response.accountReceivable = index.accountReceivable;
            responses.push(response);
        });
    }
    console.log("12234455");
    console.log(JSON.stringify(responses));
    return responses;
};
class BusinessInfoRespone {
}
exports.default = BusinessInfoRespone;
//# sourceMappingURL=BusinessInfoResponse.js.map