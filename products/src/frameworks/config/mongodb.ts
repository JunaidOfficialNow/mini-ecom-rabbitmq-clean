import mongoose from "mongoose";

export async function connectDB() {
  await mongoose.connect('mongodb://localhost:27017/rab-clean-products');
  console.log('connected to database');
}