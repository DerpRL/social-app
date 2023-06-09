// dotenv
import 'dotenv/config'

// Imports
import { MongoClient } from "mongodb";


export const MONGO_DB_CONNECTION_STRING = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CLUSTER}`;
export const MONGO_DB_DATABASE_NAME = process.env.MONGO_DB_DATABASE;
export const MONGO_DB_CLIENT = new MongoClient(MONGO_DB_CONNECTION_STRING, { appName: 'Social Application' });
