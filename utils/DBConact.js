import mongoose from "mongoose";
const uri =
    "mongodb+srv://mayibak991:sH1pB3o7U9ur82aI@cluster0.s18dmg2.mongodb.net/?retryWrites=true&w=majority";
if (!uri) {
    throw new Error("please define the MONGODB__URI environment");
}

let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { con: null, Promise: null };
}

// usage nem

const dbConnect = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.Promise) {
        const opts = {

        };
        cached.Promise = mongoose.connect(uri, opts).then((mongoose) => {
            return mongoose;
        })
    }
    try {
        cached.conn = await cached.Promise;
    } catch (error) {
        cached.Promise = null;
        throw error;
    }
    return cached.conn
};



export default dbConnect;
