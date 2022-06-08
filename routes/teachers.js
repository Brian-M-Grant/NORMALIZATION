var express = require('express');
var router = express.Router();
var connection = require('../lib/db');

router.get('/teacher', function(req, res, next) {
    if (req.session.loggedin === true) {

        connection.query('SELECT * FROM teachers', function(err, rows) {
            if (err) {
                res.render('teachers', {
                    data: ''
                })
            } else {
                res.render('teachers', {
                    data: rows
                })
            }
        })
    } else {
        res.redirect('/login/login')
    }
})
module.exports = router;