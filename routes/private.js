const express = require('express');
const path = require('path');
const { apiController, defaultController } = require('../conrollers/private');
const router = express.Router();


router.get('/myapi', apiController); 


//This the default route for private API path.
router.use(defaultController);



module.exports = router;