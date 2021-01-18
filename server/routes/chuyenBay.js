const path = require('path');
const chuyenBayController = require(path.join(__dirname, '../controllers/chuyenBay'));
const router = require("express").Router();

router.post('/', chuyenBayController.nhanLichChuyenBay);
router.get('/:MaChuyenBay/chi-tiet-chuyen-bay', chuyenBayController.layChiTietChuyenBay);
router.get('/:MaChuyenBay/tinh-trang-ve', chuyenBayController.layTinhTrangVe);

module.exports = router;