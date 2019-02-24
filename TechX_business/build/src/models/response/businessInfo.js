"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseToListBusinessInfor = (indexList) => {
    const responses = [];
    if (indexList != null) {
        indexList.forEach((index) => {
            const response = new businessInfo();
            response._id = index._id;
            response.code = index.code;
            response.quater = index.quater;
            response.year = index.year;
            response.account_receivable = index.account_receivable ;
            responses.push(response);
        });
    }
    return responses;
};
class businessInfo {
}
exports.default = businessInfo;
//# sourceMappingURL=IndexResponse.js.map