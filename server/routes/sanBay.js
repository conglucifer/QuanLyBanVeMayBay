const path = require('path');
const sanBayController = require(path.join(__dirname, '../controllers/sanBay'));
const router = require("express").Router();

router.post('/', sanBayController.nhanSanBay);
router.get('/', sanBayController.layTatCaSanBay);
router.get('/:maSanBay', sanBayController.laySanBay);

module.exports = router;