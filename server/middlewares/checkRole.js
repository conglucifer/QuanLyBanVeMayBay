const path = require('path');
const db = require(path.join(__dirname, '../models'));
const { User, Role } = db;
const Op = db.Sequelize.Op;

const isAdmin = (req, res, next) => {
    if(User.hasRole.apply(req.user, ['Admin'])){
        next();
    } else {
        return res.status(403).send({message: "Ban khong co quyen"});
    }
}

module.exports = {
    isAdmin,
};