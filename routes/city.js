const express = require('express');
const router = express.Router();
const City = require('../models/city');

router.get('/', async (req, res) => {
  try {
    const cities = await City.find().populate('country');
    res.json(cities);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching cities' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const city = await City.findById(req.params.id).populate('country');
    res.json(city);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching city' });
  }
});

module.exports = router;