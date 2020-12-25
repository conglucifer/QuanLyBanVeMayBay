const path = require('path');
const router = require('express').Router();
router.use('/', require(path.join(__dirname, 'local.js')));
module.exports = router;