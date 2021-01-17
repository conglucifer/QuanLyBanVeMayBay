module.exports = (sequelize, DataTypes) => {
    var TuyenBay = sequelize.define('TuyenBay', {
        MaTuyenBay: { type: DataTypes.STRING(10), primaryKey: true },
        SanBayDi: { type: DataTypes.STRING(10), allowNull: false },
        SanBayDen: { type: DataTypes.STRING(10), allowNull: false },
    },{
        timestamps: false,
        tableName: 'TUYENBAY',
    });
    TuyenBay.associate = function(models) {
        TuyenBay.hasMany(models.ChuyenBay);
        TuyenBay.belongsTo(models.SanBay, { foreignKey: 'SanBayDi' });
        TuyenBay.belongsTo(models.SanBay, { foreignKey: 'SanBayDen' });
        TuyenBay.hasMany(models.DonGia);
    }
    return TuyenBay;
}