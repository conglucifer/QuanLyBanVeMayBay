try{
    const path = require('path');

    require('dotenv').config();

    const passport = require(path.join(__dirname,'services/passport'));

    const helmet = require('helmet');

    const express = require('express');
    const app = express();

    app.use(passport.initialize());
    app.use(helmet());
    app.use((req, res, next) => {
        res.setHeader('Content-Security-Policy', "script-src-attr 'unsafe-inline'");
        return next();
    });
    app.use(express.urlencoded({ extended: true, limit: '256mb' }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')));

    //routes
    app.use('/auth', require(path.join(__dirname, 'routes/auth')));
    app.use('/users', passport.authenticate('jwt', {session: false}), require(path.join(__dirname, 'routes/user')));

    console.log(`Environment: ${process.env.NODE_ENV}`);
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, function() {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
} catch (error){
    console.log(error);
    return process.exit(1);
}
