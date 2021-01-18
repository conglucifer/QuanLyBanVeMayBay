const path = require('path');
const db = require(path.join(__dirname, '../models'));
const { SanBay } = db;
const Op = db.Sequelize.Op;

exports.laySanBay = (req, res) => {
    const MaSanBay = req.params.MaSanBay;
    SanBay.findByPk(MaSanBay)
    .then(sanBay => {
        res.send(sanBay);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Đã có lỗi xảy ra khi truy vấn đến sân bay."
        });
    });
}

exports.layTatCaSanBay = (req, res) => {
    SanBay.findAll()
    .then(danhSachSanBay => {
        res.send(danhSachSanBay);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Đã có lỗi xảy ra khi truy vấn đến danh sách sân bay."
        });
    });
}

exports.nhanSanBay = (req, res) => {
    // SanBay
}