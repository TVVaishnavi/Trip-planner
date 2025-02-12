const mongoose = require('../config/database');

const locationSchema = new mongoose.Schema({
  name: String,
  city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
  country: { type: mongoose.Schema.Types.ObjectId, ref: 'Country' },
  latitude: Number,
  longitude: Number,
});

module.exports = mongoose.model('Location', locationSchema);