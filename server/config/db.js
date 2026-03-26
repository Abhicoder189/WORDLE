import dotenv from "dotenv";

import mongoose from "mongoose";
dotenv.config()
const MONGO_URI = process.env.MONGO_URI

const mongo = async () => { 
    await mongoose.connect(MONGO_URI);
    console.log("Server connected succesfully");
}
export default mongo 
