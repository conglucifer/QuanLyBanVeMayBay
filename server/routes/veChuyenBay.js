const path = require('path');
const veChuyenBayController = require(path.join(__dirname, '../controllers/veChuyenBay'));
const router = require("express").Router();

router.post("/", veChuyenBayController.banVeChuyenBay);
router.get('/:MaVe', veChuyenBayController.layVeChuyenBay);

module.exports = router;