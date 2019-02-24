import { Inject, Service } from "typedi";
import { Subject } from "rx";
import config from "../config";
import { Errors, Kafka, ServiceRegistration, Utils } from "tradex-common";
import MarketService from "../services/MarketService";

@Service()
export default class RequestHandler {
  @Inject()
  private marketService: MarketService;

  public init() {
    ServiceRegistration.create(Kafka.getInstance(), {
      nodeId: config.nodeId,
      serviceName: config.clusterId
    });

    const handle: Kafka.MessageHandler = new Kafka.MessageHandler();
    new Kafka.StreamHandler(config, {}, [config.clusterId], (message: any) => handle.handle(message, this.handleRequest));
  }

  private handleRequest: Kafka.Handle = (message: Kafka.IMessage) => {
    if (message == null || message.data == null) {
      const subject: Subject<any> = new Subject();
      Utils.onError(subject, new Errors.SystemError());
      return subject;
    } else {
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