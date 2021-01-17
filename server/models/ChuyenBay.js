module.exports = (sequelize, DataTypes) => {
    var ChuyenBay = sequelize.define('ChuyenBay', {
        MaChuyenBay: { type: DataTypes.STRING(10), primaryKey: true },
        MaTuyenBay: { type: DataTypes.STRING(10), allowNull: false },
        NgayGio: { type: DataTypes.DATE, allowNull: false },
        ThoiGianBay: { type: DataTypes.INTEGER, allowNull: false },
    },{
        timestamps: false,
        tableName: 'CHUYENBAY',
    });
    ChuyenBay.associate = function(models){
        ChuyenBay.belongsTo(models.TuyenBay, { foreignKey: 'MaTuyenBay' });
        ChuyenBay.hasMany(models.ChiTietChuyenBay);
        ChuyenBay.hasMany(models.VeChuyenBay);
    }
    return ChuyenBay;
}