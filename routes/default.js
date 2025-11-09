const express = require('express');
const path = require('path');
const defaultController = require('../conrollers/default');
const router = express.Router();

router.use('/', defaultController);

module.exports = router;