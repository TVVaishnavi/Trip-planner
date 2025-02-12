const express = require('express');
const router = express.Router();
const Country = require('../models/country');

router.get('/', async (req, res) => {
  try {
    const countries = await Country.find().populate('cities');
    res.json(countries);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching countries' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const country = await Country.findById(req.params.id).populate('cities');
    res.json(country);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching country' });
  }
});

module.exports = router;