module.exports = (sequelize, DataTypes) => {
    var DonGia = sequelize.define('DonGia', {
        MaDonGia: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        MaTuyenBay: { type: DataTypes.STRING(10), allowNull: false },
        MaHangVe: { type: DataTypes.INTEGER, primaryKey: true },
        DonGia: { type: DataTypes.INTEGER, primaryKey: true },
    },{
        timestamps: false,
        tableName: 'DONGIA',
    });
    DonGia.associate = function(models) {
        DonGia.belongsTo(models.TuyenBay, { foreignKey: 'MaTuyenBay' });
        DonGia.belongsTo(models.HangVe, { foreignKey: 'MaHangVe' });
    }
    return DonGia;
}