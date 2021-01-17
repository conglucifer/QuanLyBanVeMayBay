module.exports = (sequelize, DataTypes) => {
    var ChiTietChuyenBay = sequelize.define('ChiTietChuyenBay', {
        MaChiTietChuyenBay: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        MaChuyenBay: { type: DataTypes.STRING(10), allowNull: false },
        SanBayTrungGian: { type: DataTypes.STRING(10), allowNull: false },
        ThoiGianDung: { type: DataTypes.INTEGER, allowNull: false },
        GhiChu: { type: DataTypes.STRING, allowNull: true },
    },{
        timestamps: false,
        tableName: 'CHITIETCHUYENBAY',
    });
    ChiTietChuyenBay.associate = function(models){
        ChiTietChuyenBay.belongsTo(models.ChuyenBay, { foreignKey: 'MaChuyenBay' });
        ChiTietChuyenBay.belongsTo(models.SanBay, { foreignKey: 'SanBayTrungGian' });
    }
    return ChiTietChuyenBay;
}