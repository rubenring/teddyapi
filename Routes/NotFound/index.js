'use strict';

import express from 'express';
const notfound = express.Router();

notfound.all('/', (req, res) => {
  res.status(404).json({Error: 'Route not found'});
});

export default notfound;
