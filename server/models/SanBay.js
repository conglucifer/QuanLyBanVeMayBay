module.exports = (sequelize, DataTypes) => {
    var SanBay = sequelize.define('SanBay', {
        MaSanBay: { type: DataTypes.STRING(10), primaryKey: true },
        TenSanBay: { type: DataTypes.STRING(10), allowNull: false },
    },{
        timestamps: false,
        tableName: 'SANBAY',
    });
    SanBay.associate = function(models){
        SanBay.hasMany(models.ChiTietChuyenBay, { foreignKey: 'SanBayTrungGian' });
        SanBay.hasMany(models.TuyenBay, { foreignKey: 'SanBayDi' });
        SanBay.hasMany(models.TuyenBay, { foreignKey: 'SanBayDen' });
    }
    return SanBay;
}