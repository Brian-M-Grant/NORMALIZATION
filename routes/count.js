var express = require('express');
var router = express.Router();
var connection = require('../lib/db');


router.get('/count', (req, res, next) => {
    connection.query("SELECT COUNT(id) AS 'COUNT' FROM stu_dent.student", (err, row, fields) => {
        if (err) {
            res.render('count', {
                data: '',
            })
        } else {
            res.render('count', {
                data: row,

            })

        }

    })

})



module.exports = router;