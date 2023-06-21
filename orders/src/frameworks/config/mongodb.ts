import mongoose from "mongoose";

export async function  connectDB() {
  if (!process.env.MONGO_URL) {
    throw new Error('please provide mongodb url');
  }
  await mongoose.connect(process.env.MONGO_URL);
  console.log('Connected to mongodb');
}