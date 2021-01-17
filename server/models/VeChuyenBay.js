module.exports = (sequelize, DataTypes) => {
    var VeChuyenBay = sequelize.define('VeChuyenBay', {
        MaVe: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        MaChuyenBay: { type: DataTypes.STRING(10), allowNull: false },
        MaHangVe: { type: DataTypes.INTEGER, allowNull: false },
        MaHanhKhach: { type: DataTypes.INTEGER, allowNull: false },
        GiaTien: { type: DataTypes.INTEGER, allowNull: false },
    },{
        timestamps: false,
        tableName: 'VECHUYENBAY',
    });
    VeChuyenBay.associate = function(models) {
        VeChuyenBay.belongsTo(models.ChuyenBay, { foreignKey: 'MaChuyenBay' });
        VeChuyenBay.belongsTo(models.HangVe, { foreignKey: 'MaHangVe' });
        VeChuyenBay.belongsTo(models.HanhKhach, { foreignKey: 'MaHanhKhach' });
    }
    return VeChuyenBay;
}