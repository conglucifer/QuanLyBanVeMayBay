const path = require('path');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const { User, Role } = require(path.join(__dirname, '../../models'));

module.exports = new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, async (email, password, done) => {
    try {
        const users = await User.findAll({
            where: {email},
            include: {model: Role, as: 'roles'}
        });
        if (users.length === 0) {
            return done(null, false, {
                message: 'User does not exists.'
            });
        }
        const user = users[0];
        if (await bcrypt.compare(password, user.password)) {
            return done(null, user);
        } else {
            return done(null, false, {
                message: 'Password is incorrect.'
            });
        }
    } catch (error) {
        return done(error);
    }
});