const path = require('path');
const db = require(path.join(__dirname, '../models'));
const { ChuyenBay, ChiTietChuyenBay, SanBay, TinhTrangVe } = db;
const Op = db.Sequelize.Op;

exports.layChiTietChuyenBay = (req, res) => {
    const maChuyenBay = req.params.maChuyenBay;
    ChiTietChuyenBay.findAll({ where: { MaChuyenBay: maChuyenBay }, include: {model: SanBay, as: 'SanBayTrungGian'} })
    .then(chiTietChuyenBay => {
        res.send(chiTietChuyenBay);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Đã có lỗi xảy ra khi truy vấn đến chi tiết chuyến bay."
        });
    });
}

exports.layTinhTrangVe = (req, res) => {
    const maChuyenBay = req.params.maChuyenBay;
    TinhTrangVe.findAll({ where: { MaChuyenBay: maChuyenBay }, include: {model: HangVe, as: 'HangVe'}})
    .then(tinhTrangVe => {
        res.send(tinhTrangVe);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Đã có lỗi xảy ra khi truy vấn đến tình trạng vé."
        });
    });
}

exports.nhanLichChuyenBay = (req, res) => {
    // Validate request
    if (!req.body.email) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }
    // Create a User
    const user = {
        email: req.body.email,
    };

    // Save User in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the User."
            });
        });
}