// Imports
import { Collection, Db } from "mongodb";
import { MONGO_DB_CLIENT } from "../utils/builders";
import { User } from "./interfaces";


export async function connectMongoDB(): Promise<void> {
    try {
        await MONGO_DB_CLIENT.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
        throw error;
    }
}

export async function disconnectMongoDB(): Promise<void> {
    try {
        await MONGO_DB_CLIENT.close();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Failed to disconnect from MongoDB', error);
        throw error;
    }
}

export async function getMongoDatabase(databaseName: string): Promise<Db> {
    return MONGO_DB_CLIENT.db(databaseName);
}

export async function getMongoCollection(database: Db, collectionName: string): Promise<Collection<User>> {
    return database.collection<User>(collectionName);
}
