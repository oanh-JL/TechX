import config from "./config";
import "reflect-metadata";
import { connectToServer } from "./utils/dbConnection";
import { Kafka, Logger, TradexNotification } from "tradex-common";
import { Container } from "typedi";
import RequestHandler from "./consumers/RequestHandler";
import { Db } from "mongodb";

Logger.create(config.logger.config, true);
Logger.info("Starting...");

connectToServer().then((database: Db) => {
  Kafka.create(config, {}, true, { "auto.offset.reset": "earliest" });
  TradexNotification.create(Kafka.getInstance());
  const requestHandler = Container.get(RequestHandler);
  requestHandler.init();
}).catch((error: any) => Logger.error(error));
