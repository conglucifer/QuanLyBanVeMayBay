const path = require('path');
const db = require(path.join(__dirname, '../models'));
const { VeChuyenBay, HangVe } = db;
const Op = db.Sequelize.Op;

exports.banVeChuyenBay = (req, res) => {
    const { MaChuyenBay, MaHangVe, MaHanhKhach, GiaTien } = req.body;

    VeChuyenBay.create({
        MaChuyenBay, MaHangVe, MaHanhKhach, GiaTien
    }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Đã xảy ra lỗi khi đang tạo vé."
        });
    });
}

exports.layVeChuyenBay = (req, res) => {
    const MaVe = req.params.MaVe;

    VeChuyenBay.findByPk(MaVe, {include: HangVe})
    .then(veChuyenBay => {
        res.send(veChuyenBay);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Đã xảy ra lỗi khi đang lấy vé."
        });
    })
}