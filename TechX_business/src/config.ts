/* tslint:disable */
import { v4 as uuid } from "uuid";

const databaseName = "tradex-business-info";

const nodeId = uuid();
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
    kafkaUrls:
      [
        "localhost:9092"
      ],
    zkUrls:
      [
        "localhost:2181"
      ]
  }
;

try {
  const env = require("./env");
  if (env) {
    config = { ...config, ...env(config) };
  }
} catch (e) {
  //swalow it
}
export default config;
