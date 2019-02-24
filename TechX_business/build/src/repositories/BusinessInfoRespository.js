"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const dbConnection_1 = require("../utils/dbConnection");
let BusinessInfoRepository = class BusinessInfoRepository {
    findAll() {
        console.log("2333333333333333333333");
        return new Promise((resolve, reject) => {
            dbConnection_1.getDb().collection("t_tradex_business_info").find({}).limit(3).toArray((err, result) => {
                if (err) {
                    console.log("5555555555555555");
                    reject(err);
                }
                else {
                    console.log("444444444444444444");
                    resolve(result);
                }
            });
        });
    }
};
BusinessInfoRepository = tslib_1.__decorate([
    typedi_1.Service()
], BusinessInfoRepository);
exports.BusinessInfoRepository = BusinessInfoRepository;
//# sourceMappingURL=BusinessInfoRespository.js.map