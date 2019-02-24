"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const config_1 = require("../config");
let database;
function connectToServer() {
    return new Promise((resolve, reject) => {
        mongodb_1.MongoClient.connect(config_1.default.db.connection.url, { useNewUrlParser: true }, (err, db) => {
            database = db.db(config_1.default.db.connection.database);
            resolve(database);
        });
    });
}
exports.connectToServer = connectToServer;
function getDb() {
    return database;
}
exports.getDb = getDb;
//# sourceMappingURL=dbConnection.js.map