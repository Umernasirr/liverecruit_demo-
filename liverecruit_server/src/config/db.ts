import mongoose = require("mongoose");
import dotenv from "dotenv";

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI ?? "");

  console.log(`MongoDb Connected: ${conn.connection.host}`);
};

export default connectDb;
