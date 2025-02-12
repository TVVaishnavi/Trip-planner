const express = require('express');
const app = express();
const mongoose = require('./config/database');
const authRouter = require('./routes/auth');
const cityRouter = require('./routes/city');
const countryRouter = require('./routes/country');
const locationRouter = require('./routes/location');

app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/city', cityRouter);
app.use('/api/country', countryRouter);
app.use('/api/location', locationRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});