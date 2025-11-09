const express = require('express');
const path = require('path');
const { apiController } = require('../conrollers/public');
const {defaultController} = require('../conrollers/public');
const router = express.Router();


router.get('/myapi', apiController); 

router.use(defaultController);



module.exports = router;