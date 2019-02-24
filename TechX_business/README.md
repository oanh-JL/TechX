# README #

This project is for providing business info apis

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

1. install node version 8.11.3
2. run npm install
3. run npm run build
4. run with node build/src/index.js

### How to run in local ###

1. Download kafka from https://kafka.apache.org/
2. Extract
3. Start zookeeper by a console file in bin directory
4. Start kafka by a console file in bin directory
5. install ubuntu sub-system in window 10 (if needed)
6. run like : "How do I get set up" 

### Trainer ###

#### Requirements
1. Create api that can query data from mongodb and a filter base on some parameter request

#### Steps to do
1. define uri, request and response like in swagger
2. Create model for: request, response, and database
3. Add Repository for that model. Remember to mark annotation: @Service()
4. Add Service for query business-info. Remember to mark annotation: @Service(). and @Inject Repository
5. Add handle for that uri in consumers/RequestHandler.ts. @Inject Service. and cast data of message to request interface.

#### How to test
1. listen message from topic: test
2. produce message to topic: business-info
```
{"messageType":"REQUEST","sourceId":"test","messageId":1,"transactionId":"b98f","uri":"<uri>","responseDestination":{"topic":"test","uri":"REQUEST_RESPONSE"},"data":<request-here>}
```

