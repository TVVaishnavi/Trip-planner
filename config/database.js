const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const url = 'mongodb+srv://vaishnavitvenkatesh:<kQjHK3W8SsB9StOa>@cluster1.8qol1.mongodb.net/';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, options)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

module.exports = mongoose;