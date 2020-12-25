const path = require('path');
const passport = require('passport');
const LocalStrategy = require(path.join(__dirname, 'local'));
const JwtStrategy = require(path.join(__dirname, 'jwt'));

passport.use(LocalStrategy);
passport.use(JwtStrategy);

module.exports = passport;