const mongoose = require('../config/database');

const countrySchema = new mongoose.Schema({
  name: String,
  cities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'City' }],
});

module.exports = mongoose.model('Country', countrySchema);