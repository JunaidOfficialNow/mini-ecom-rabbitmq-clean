import {Schema, model} from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const productModel = model('products', productSchema)
export { productModel };