import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: true,
  },
  reviews: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
