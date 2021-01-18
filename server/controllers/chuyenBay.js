const path = require('path');
const db = require(path.join(__dirname, '../models'));
const { ChuyenBay, ChiTietChuyenBay, SanBay, TinhTrangVe, TuyenBay, HangVe } = db;
const Op = db.Sequelize.Op;

exports.layChiTietChuyenBay = (req, res) => {
    const MaChuyenBay = req.params.MaChuyenBay;
    ChiTietChuyenBay.findAll({ where: { MaChuyenBay }, include: {model: SanBay}})
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
    const MaChuyenBay = req.params.MaChuyenBay;
    TinhTrangVe.findAll({ where: { MaChuyenBay }, include: {model: HangVe, as: 'HangVe'}})
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
    const { MaChuyenBay, SanBayDi, SanBayDen, NgayGio, ThoiGianBay, DanhSachHangVe, DanhSachSanBayTrungGian } = req.body;
    TuyenBay.findOne({ where: {SanBayDi, SanBayDen} })
    .then((tuyenBay) => {
        if(!tuyenBay){
            return TuyenBay.create({MaTuyenBay: SanBayDi + "-" + SanBayDen, SanBayDi, SanBayDen});
        }
        return tuyenBay;
    }).then((tuyenBay) => {
        return ChuyenBay.create({
            MaChuyenBay, MaTuyenBay: tuyenBay.MaTuyenBay, NgayGio, ThoiGianBay, 
            TinhTrangVe: DanhSachHangVe.map(hangVe => ({...hangVe, SoLuongGheTrong: hangVe.SoLuongGhe, SoGheDat: 0 })), 
            ChiTietChuyenBay: DanhSachSanBayTrungGian.map(sanBay => ({...sanBay}))
        }, {include: [{model: TinhTrangVe, as: "TinhTrangVe"}, {model: ChiTietChuyenBay, as: "ChiTietChuyenBay"}]});
    }).then(chuyenBay => {
        res.send(chuyenBay);
    }).catch(err => {
        res.status(500).send({
            message:
            err || "Đã có lỗi xảy ra khi tạo lịch chuyến bay."
        });
    });
}