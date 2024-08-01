const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

router.get('/search', trainController.searchTrains);
router.get('/:trainId/seats', trainController.getSeats);

module.exports = router;
