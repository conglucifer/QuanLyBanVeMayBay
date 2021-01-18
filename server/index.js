try{
    const path = require('path');

    require('dotenv').config();

    const passport = require(path.join(__dirname,'services/passport'));

    const helmet = require('helmet');

    const cors = require('cors');

    const express = require('express');
    const app = express();

    app.use(cors({
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200,
    }));

    app.use(passport.initialize());
    app.use(helmet());
    app.use((req, res, next) => {
        res.setHeader('Content-Security-Policy', "script-src-attr 'unsafe-inline'");
        return next();
    });
    app.use(express.urlencoded({ extended: true, limit: '256mb' }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')));

    const checkRole = require(path.join(__dirname, 'middlewares/checkRole'));
    //routes
    app.use('/api/auth', require(path.join(__dirname, 'routes/auth')));
    app.use('/api/users', passport.authenticate('jwt', {session: false}) , checkRole.isAdmin, require(path.join(__dirname, 'routes/user')));
    app.use('/api/chuyen-bay', require(path.join(__dirname, 'routes/chuyenBay')));
    app.use('/api/san-bay', require(path.join(__dirname, 'routes/sanBay')));
    app.use('/api/ve-chuyen-bay', require(path.join(__dirname, 'routes/veChuyenBay')));

    console.log(`Environment: ${process.env.NODE_ENV}`);
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, function() {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
} catch (error){
    console.log(error);
    return process.exit(1);
}
