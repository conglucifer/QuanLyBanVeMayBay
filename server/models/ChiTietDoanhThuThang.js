module.exports = (sequelize, DataTypes) => {
    var ChiTietDoanhThuThang = sequelize.define('ChiTietDoanhThuThang', {
        MaCTDoanhThuThang: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        MaDoanhThuThang: { type: DataTypes.INTEGER, allowNull: false },
        MaChuyenBay: { type: DataTypes.STRING(10), allowNull: false },
        SoVe: { type: DataTypes.INTEGER, allowNull: false },
        TyLe: { type: DataTypes.DECIMAL(5,2), allowNull: false },
        DoanhThu: { type: DataTypes.DECIMAL(15,2), allowNull: false },
    },{
        timestamps: false,
        tableName: 'CT_DOANHTHUTHANG',
    });
    ChiTietDoanhThuThang.associate = function(models){
        ChiTietDoanhThuThang.belongsTo(models.DoanhThuThang, { foreignKey: 'MaDoanhThuThang' });
    }
    return ChiTietDoanhThuThang;
}