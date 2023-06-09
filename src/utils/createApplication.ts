// Imports
import { Collection } from "mongodb";
import { connectMongoDB, getMongoDatabase, getMongoCollection, disconnectMongoDB } from "../mongoDB/connectionCreator";
import { User } from "../mongoDB/interfaces";
import { MONGO_DB_DATABASE } from "./constants";


export async function createApp(): Promise<void> {
    try {
        await connectMongoDB();
        const mongoDatabase = await getMongoDatabase(MONGO_DB_DATABASE);
        const usersCollection: Collection<User> = await getMongoCollection(mongoDatabase, "users");

        await usersCollection.insertOne({
            name: "John Doe",
            age: 30,
            email: "kenaa@example.com",
            password: "123456",
            registeredTimestamp: new Date().toISOString()
        })

        const users = usersCollection.find({});

        for await (const user of users) {
            console.log(`${user.name} has email, ${user.email}}!`);
        }        
    } catch (error) {
        console.error('Error starting the application', error);
    } finally {
        await disconnectMongoDB();
    }
}
