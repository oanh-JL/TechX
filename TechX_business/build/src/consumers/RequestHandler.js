"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typedi_1 = require("typedi");
const rx_1 = require("rx");
const config_1 = require("../config");
const tradex_common_1 = require("tradex-common");
const MarketService_1 = require("../services/MarketService");
let RequestHandler = class RequestHandler {
    constructor() {
        this.handleRequest = (message) => {
            if (message == null || message.data == null) {
                const subject = new rx_1.Subject();
                tradex_common_1.Utils.onError(subject, new tradex_common_1.Errors.SystemError());
                return subject;
            }
            else {
                if (message.uri === "/api/v1/market/index") {
                    return this.marketService.queryIndexList();
                }
                if (message.uri === "/api/v1/market/businessInfo") {
                    console.log("11111111111");
                    return this.marketService.queryBusinessInfoList();
                }
            }
            return false;
        };
    }
    init() {
        tradex_common_1.ServiceRegistration.create(tradex_common_1.Kafka.getInstance(), {
            nodeId: config_1.default.nodeId,
            serviceName: config_1.default.clusterId
        });
        const handle = new tradex_common_1.Kafka.MessageHandler();
        new tradex_common_1.Kafka.StreamHandler(config_1.default, {}, [config_1.default.clusterId], (message) => handle.handle(message, this.handleRequest));
    }
};
tslib_1.__decorate([
    typedi_1.Inject(),
    tslib_1.__metadata("design:type", MarketService_1.default)
], RequestHandler.prototype, "marketService", void 0);
RequestHandler = tslib_1.__decorate([
    typedi_1.Service()
], RequestHandler);
exports.default = RequestHandler;
//# sourceMappingURL=RequestHandler.js.map