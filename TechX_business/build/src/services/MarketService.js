"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const rx_1 = require("rx");
const IndexRepository_1 = require("../repositories/IndexRepository");
const IndexResponse_1 = require("../models/response/IndexResponse");
const tradex_common_1 = require("tradex-common");
const BusinessInfoRespository_1 = require("../repositories/BusinessInfoRespository");
const BusinessInfoResponse_1 = require("../models/response/BusinessInfoResponse");
let MarketService = class MarketService {
    queryIndexList() {
        const subject = new rx_1.Subject();
        tradex_common_1.Utils.transformSinglePromise(subject, new Promise((resolve, reject) => {
            this.indexRepository.findAll().then((indexList) => {
                indexList.sort((i1, i2) => i1.isHighlight - i2.isHighlight);
                resolve(IndexResponse_1.parseToListMarketIndexResponse(indexList));
            }).catch((error) => {
                tradex_common_1.Logger.error(error);
                reject(error);
            });
        }));
        return subject;
    }
    queryBusinessInfoList() {
        const subject = new rx_1.Subject();
        console.log("22222222222222222");
        tradex_common_1.Utils.transformSinglePromise(subject, new Promise((resolve, reject) => {
            this.businessInfoRespository.findAll().then((businessInfoList) => {
                console.log(JSON.stringify(businessInfoList));
                resolve(BusinessInfoResponse_1.parseToListMarketBusinessInfoResponse(businessInfoList));
            }).catch((error) => {
                tradex_common_1.Logger.error(error);
                reject(error);
            });
        }));
        return subject;
    }
};
tslib_1.__decorate([
    typedi_1.Inject(),
    tslib_1.__metadata("design:type", IndexRepository_1.IndexRepository)
], MarketService.prototype, "indexRepository", void 0);
tslib_1.__decorate([
    typedi_1.Inject(),
    tslib_1.__metadata("design:type", BusinessInfoRespository_1.BusinessInfoRepository)
], MarketService.prototype, "businessInfoRespository", void 0);
MarketService = tslib_1.__decorate([
    typedi_1.Service()
], MarketService);
exports.default = MarketService;
//# sourceMappingURL=MarketService.js.map