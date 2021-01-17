module.exports = (sequelize, DataTypes) => {
    var TinhTrangVe = sequelize.define('TinhTrangVe', {
        MaTinhTrangVe: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        MaChuyenBay: { type: DataTypes.STRING(10), allowNull: false },
        MaHangVe: { type: DataTypes.INTEGER, allowNull: false },
        SoLuongGhe: { type: DataTypes.INTEGER, allowNull: false },
        SoLuongGheTrong: { type: DataTypes.INTEGER, allowNull: false },
        SoGheDat: { type: DataTypes.INTEGER, allowNull: false },
    },{
        timestamps: false,
        tableName: 'TINHTRANGVE',
    });
    TinhTrangVe.associate = function(models){
        TinhTrangVe.belongsTo(models.ChuyenBay, { foreignKey: 'MaChuyenBay' });
        TinhTrangVe.belongsTo(models.HangVe, { foreignKey: 'MaHangVe' });
    }
    return TinhTrangVe;
}