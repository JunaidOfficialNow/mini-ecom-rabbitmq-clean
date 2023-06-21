import { Document, Model, Schema,  model } from "mongoose";

const userSchema = new Schema({
  name:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashPassword: {
    type: String,
    required: true,
  }
})


userSchema.set("versionKey", "version");


export interface userDoc extends Document {
  name: string;
  email: string;
  hashPassword: string;
  _id: string;
  version: number;
}



const userModel = model<userDoc, Model<userDoc>>('users', userSchema);
export { userModel };