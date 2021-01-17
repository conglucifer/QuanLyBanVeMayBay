module.exports = (sequelize, DataTypes) => {
    var HanhKhach = sequelize.define('HanhKhach', {
        MaHanhKhach: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        TenHanhKhach: { type: DataTypes.STRING, allowNull: false },
        CMND: { type: DataTypes.STRING(12), allowNull: false },
        DienThoai: { type: DataTypes.STRING(12), allowNull: false },
    },{
        timestamps: false,
        tableName: 'HANHKHACH',
    });
    HanhKhach.associate = function(models) {
        HanhKhach.hasMany(models.VeChuyenBay);
        HanhKhach.hasMany(models.VeChuyenBay);
    }
    return HanhKhach;
}