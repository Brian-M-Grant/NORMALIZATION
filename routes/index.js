var express = require('express');
const app = require('../app');

var router = express.Router();
var conn = require('../lib/db')
router.get('/', function(req, res, next) {
    if (req.session.loggedin === true) {
        conn.query('SELECT * FROM auth', function(err, row) {
            res.render('display', {
                user: "SELECT username FROM auth",
                data: row
            });

        })
    } else {
        res.redirect('/login/login')
    }

});

module.exports = router;