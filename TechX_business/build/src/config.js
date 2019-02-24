"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const databaseName = "tradex-business-info";
const nodeId = uuid_1.v4();
let config = {
    db: {
        client: "mongodb",
        connection: {
            url: `mongodb://intern:intern%40123@dev1tradex.ddns.net:27017/${databaseName}`,
            database: databaseName
        }
    },
    logger: {
        config: {
            appenders: { application: { type: "console" } },
            categories: { default: { appenders: ["application"], level: "info" } }
        }
    },
    clusterId: "business-info",
    clientId: `business-info-${nodeId}`,
    nodeId: nodeId,
    kafkaUrls: [
        "localhost:9092"
    ],
    zkUrls: [
        "localhost:2181"
    ]
};
try {
    const env = require("./env");
    if (env) {
        config = Object.assign({}, config, env(config));
    }
}
catch (e) {
}
exports.default = config;
//# sourceMappingURL=config.js.map