import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  }
})

userSchema.set('versionKey', 'version');

export interface userDoc {
  _id: string,
  name: string,
  email: string,
}

const userModel = model('users', userSchema);
export {  userModel };