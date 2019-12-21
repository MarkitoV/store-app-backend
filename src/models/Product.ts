import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
  name: String,
  container: String,
  size: String,
  description: String,
  price: Number,
  stock: Number,
  imagePath: String
});

interface IProduct extends Document {
  name: string;
  container: string;
  size: string;
  description: string;
  price: number;
  stock: number;
  imagePath: string;
}

export default model<IProduct>('Product', schema);