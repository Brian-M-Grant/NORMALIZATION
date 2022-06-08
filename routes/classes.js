var express = require('express');
var router = express.Router();
var connection = require('../lib/db');


router.get('/class', (req, res, next) => {
    if (req.session.loggedin === true) {
        const list = "SELECT * FROM student ORDER BY id";
        connection.query(list, (err, row) => {
            if (err) {
                res.render('classes', {
                    data: ''
                })
            } else {
                res.render('classes', {
                    data: row,
                })

            }

        })
    } else {
        res.redirect('/login/login')
    }
})

router.get('/class/edit/:id', function(req, res, next) {
    connection.query('SELECT * FROM student WHERE Id =' + req.params.id, function(err, row) {
        if (err) {
            res.render('student-edit', {
                student: ''
            })
        } else {
            res.render('student-edit', {
                student: row,

            });
        }
    });
});


router.post('/class/update', (req, res, next) => {
    let sql = "UPDATE student SET stud_name= '" + req.body.student_nm + "', teacher = '" + req.body.teacher_nm + "' WHERE id = " + req.body.id;
    console.log(sql);
    console.log(req.body)
    connection.query(sql, (err, row) => {
        res.redirect('/class/class');
        next()
    });
});

module.exports = router;