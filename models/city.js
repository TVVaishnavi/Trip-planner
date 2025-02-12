const mongoose = require('../config/database');

const citySchema = new mongoose.Schema({
  name: String,
  country: String,
  latitude: Number,
  longitude: Number,
});

module.exports = mongoose.model('City', citySchema);