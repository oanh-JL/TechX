"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const dbConnection_1 = require("../utils/dbConnection");
const constants_1 = require("../constants");
let IndexRepository = class IndexRepository {
    findAll() {
        return new Promise((resolve, reject) => {
            dbConnection_1.getDb().collection(constants_1.COLLECTIONS_NAME.INDEX).find({}).toArray((err, result) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
};
IndexRepository = tslib_1.__decorate([
    typedi_1.Service()
], IndexRepository);
exports.IndexRepository = IndexRepository;
//# sourceMappingURL=IndexRepository.js.map