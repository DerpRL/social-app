// Imports
import { MONGO_DB_CLIENT, MONGO_DB_DATABASE_NAME } from "./builders";


export async function createApp() {
    try {
        await MONGO_DB_CLIENT.connect();
        console.log('Connected to MongoDB');

        const db = MONGO_DB_CLIENT.db(MONGO_DB_DATABASE_NAME);
        const collection = db.collection('documents')

        console.log(collection);

        return 'done';
    } catch (error) {
        console.log(error);
    } finally {
        MONGO_DB_CLIENT.close();
    }
}
