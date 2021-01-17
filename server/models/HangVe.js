module.exports = (sequelize, DataTypes) => {
    var HangVe = sequelize.define('HangVe', {
        MaHangVe: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        TenHangVe: { type: DataTypes.STRING(10), allowNull: false },
    },{
        timestamps: false,
        tableName: 'HANGVE',
    });
    HangVe.associate = function(models) {
        HangVe.hasMany(models.TinhTrangVe);
        HangVe.hasMany(models.VeChuyenBay);
        HangVe.hasMany(models.DonGia);
    }
    return HangVe;
}