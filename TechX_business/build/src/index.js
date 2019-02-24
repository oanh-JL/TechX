"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
require("reflect-metadata");
const dbConnection_1 = require("./utils/dbConnection");
const tradex_common_1 = require("tradex-common");
const typedi_1 = require("typedi");
const RequestHandler_1 = require("./consumers/RequestHandler");
tradex_common_1.Logger.create(config_1.default.logger.config, true);
tradex_common_1.Logger.info("Starting...");
dbConnection_1.connectToServer().then((database) => {
    tradex_common_1.Kafka.create(config_1.default, {}, true, { "auto.offset.reset": "earliest" });
    tradex_common_1.TradexNotification.create(tradex_common_1.Kafka.getInstance());
    const requestHandler = typedi_1.Container.get(RequestHandler_1.default);
    requestHandler.init();
}).catch((error) => tradex_common_1.Logger.error(error));
//# sourceMappingURL=index.js.map