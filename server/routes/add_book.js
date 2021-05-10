
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'doc_sach_online_db'
});


router.post('/', function(req, res, next) {
    console.log("123");
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
        // Use the connection
        connection.query(`INSERT INTO sach_truyen (ID, Type, Ten, ID_tac_gia, ID_the_loai, ID_nha_xuat_ban, Tom_tat, Ngay_xuat_ban, Doc_thu, Kich_thuoc, SKU, Hinh, So_trang, Don_gia, Tinh_Trang, Alias, Noi_bat) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`
            , [
                req.body.Type,
                req.body.Ten,
                req.body.ID_tac_gia,
                req.body.ID_the_loai,
                req.body.ID_nha_xuat_ban,
                req.body.Tom_tat,
                req.body.Ngay_xuat_ban,
                req.body.Doc_thu,
                req.body.Kich_thuoc,
                req.body.SKU,
                req.body.Hinh,
                req.body.So_trang,
                req.body.Don_gia,
                req.body.Tinh_Trang,
                req.body.Alias,
                req.body.Noi_bat
            ]
            , function (error, results, fields) {
                if (error) throw error;
                res.json(results);
            }
        );
    });

});

module.exports = router;


