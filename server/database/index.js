import mongoose from "mongoose";
import * as dotenv from 'dotenv';
// database connection
dotenv.config()
export const mongoDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/blackoffer3")
    .then(() => {
        console.log("MongoDb database is connected!");
    })
    .catch((error) => {
        console.log(error);
    });
}