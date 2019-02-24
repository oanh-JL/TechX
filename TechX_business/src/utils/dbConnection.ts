import { MongoClient, Db } from 'mongodb';
import config from '../config';

let database: Db;

export function connectToServer(): Promise<Db> {
  return new Promise((resolve: Function, reject: Function) => {
    MongoClient.connect(config.db.connection.url, {useNewUrlParser: true}, (err: any, db: MongoClient) => {
      database = db.db(config.db.connection.database);
      resolve(database);
    });
  });
}

export function getDb(): Db {
  return database;
}
