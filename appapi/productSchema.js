const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  image_url: String,
  name: String,
  short_description: String,
  download_link: String,
  demo_link: String
});

const Product = mongoose.model('digiProduct', productSchema);

module.exports = Product;
