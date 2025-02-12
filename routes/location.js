
const express = require('express');
const router = express.Router();
const Location = require('../models/location');

router.get('/', async (req, res) => {
  try {
    const locations = await Location.find().populate('city country');
    res.json(locations);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching locations' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const location = await Location.findById(req.params.id).populate('city country');
    res.json(location);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching location' });
  }
});

module.exports = router;