module.exports = (sequelize, DataTypes) => {
    var ThamSo = sequelize.define('ThamSo', {
        ThoiGianBayToiThieu: { type: DataTypes.INTEGER, allowNull: false },
        SoSanBayTrungGianToiDa: { type: DataTypes.INTEGER, allowNull: false },
        ThoiGianDungToiThieu: { type: DataTypes.INTEGER, allowNull: false },
        ThoiGianDungToiDa: { type: DataTypes.INTEGER, allowNull: false },
        TGChamNhatDatVe: { type: DataTypes.INTEGER, allowNull: false },
        TGChamNhatHuyDatVe: { type: DataTypes.INTEGER, allowNull: false },
    },{
        timestamps: false,
        tableName: 'THAMSO',
    });
    return ThamSo;
}