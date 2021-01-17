module.exports = (sequelize, DataTypes) => {
    var DoanhThuThang = sequelize.define('DoanhThuThang', {
        MaDoanhThuThang: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        Thang: { type: DataTypes.INTEGER, allowNull: false },
        MaDoanhThuNam: { type: DataTypes.INTEGER, allowNull: false },
        SoChuyenBay: { type: DataTypes.INTEGER, allowNull: false },
        TyLe: { type: DataTypes.DECIMAL(5,2), allowNull: false },
        TongDoanhThuThang: { type: DataTypes.DECIMAL(15,2), allowNull: false },
    },{
        timestamps: false,
        tableName: 'DOANHTHUTHANG',
    });
    DoanhThuThang.associate = function(models){
        DoanhThuThang.hasMany(models.ChiTietDoanhThuThang);
        DoanhThuThang.belongsTo(models.DoanhThuNam, { foreignKey: 'MaDoanhThuNam' });
    }
    return DoanhThuThang;
}