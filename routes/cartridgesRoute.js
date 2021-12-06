const express = require('express');
const router = express.Router();

const getAllCartridges = require('../controllers/Cartridges');

router.get('/cartridges', getAllCartridges);

module.exports = router;