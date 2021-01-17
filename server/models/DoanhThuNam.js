module.exports = (sequelize, DataTypes) => {
    var DoanhThuNam = sequelize.define('DoanhThuNam', {
        MaDoanhThuNam: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        Nam: { type: DataTypes.INTEGER, allowNull: false },
        TongDoanhThuNam: { type: DataTypes.DECIMAL(15,2), allowNull: false },
    },{
        timestamps: false,
        tableName: 'DOANHTHUNAM',
    });
    DoanhThuNam.associate = function(models){
        DoanhThuNam.hasMany(models.DoanhThuThang);
    }
    return DoanhThuNam;
}