const express = require('express');
const router  = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");
const secret = require("../config/app_configs").jwtSecret;

var cookieParser = require('cookie-parser');
router.use(cookieParser());
//require('../config/passport')(passport)

//use cookie parser to save login information on frontend

/* POST login. */
router.post('/login', function (req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user   : user,
                info    : info
            });
        }
       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }
           // generate a signed son web token with the contents of user object and return it in the response
           const token = jwt.sign(user, secret);
           res.cookie('jwttoken', token, {expire : new Date() + 7 * 24 * 60 * 60 * 1000})
           res.json({username: user, status:'success'});
        });
    })(req, res);
});

module.exports = router;
