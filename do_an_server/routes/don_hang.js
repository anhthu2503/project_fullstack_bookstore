
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'doc_sach_online_db'
});


var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'anhthu25032001@gmail.com',
      pass: 'thuthao525123'
    }
}));


router.post('/', function(req, res, next) {

    console.log('hjgfghfgh');

    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!

        var tong_tien = 0;

        req.body.chi_tiet_don_hang.forEach(item_gio_hang => {
            tong_tien += item_gio_hang.Thanh_tien
        });
        // Use the connection
        connection.query(`INSERT INTO don_hang (ID, Tong_tien, Ngay_dat, ID_nguoi_dung, Fullname_nguoi_nhan, Sđt_nguoi_nhan, Address_nguoi_nhan, Email_nguoi_nhan)
        VALUES (NULL, ?, ?, ?, ?, ?, ?, ?);`
            , [
                tong_tien,
                '2020-01-01',
                '0',
                req.body.Fullname_nguoi_nhan,
                req.body.Sđt_nguoi_nhan,
                req.body.Address_nguoi_nhan,
                req.body.Email_nguoi_nhan,
            ]
            , function (error, results, fields) {
            // When done with the connection, release it.

                // Handle error after the release.
                if (error) throw error;
                if(results.insertId){


                    var html_string = '';
                    req.body.chi_tiet_don_hang.forEach((item_gio_hang, index) => {

                        html_string += `
                            <div>
                                ${item_gio_hang.ID_don_hang},
                                ${item_gio_hang.ID_sach_truyen},
                                ${item_gio_hang.So_luong},
                                ${item_gio_hang.Don_gia},
                                ${item_gio_hang.Thanh_tien}
                            </div>
                        `
                        connection.query(
                            `INSERT INTO chi_tiet_don_hang (ID, ID_don_hang, Ten, So_luong, Don_gia, Thanh_tien)
                            VALUES (NULL, ?, ?, ?, ?, ?);`,
                            [
                                results.insertId,
                                // item_gio_hang.ID_don_hang,
                                item_gio_hang.Ten,
                                item_gio_hang.So_luong,
                                item_gio_hang.Don_gia,
                                item_gio_hang.Thanh_tien,
                            ],
                            function (err_child, results_child, fields) {
                                if (err_child){
                                    res.json({
                                        error: true,
                                        error_message: "Thêm Đơn Hàng Thất Bại"
                                    });

                                    throw err_child;
                                }

                                if(index == req.body.chi_tiet_don_hang.length - 1){

                                    var ma_truy_xuat_dh = 'abcd_' + String(results.insertId).padStart(12, '0');
                                    console.log(ma_truy_xuat_dh, results.insertId)
                                    connection.query('UPDATE don_hang SET ma_truy_xuat_dh = ? WHERE ID = ?',
                                        [
                                            ma_truy_xuat_dh,
                                            results.insertId
                                        ],
                                        function(err_update, results_update, fields){
                                            if (err_update){
                                                res.json({
                                                    error: true,
                                                    error_message: "Tạo mã truy xuất thất bại"
                                                });
                                                throw err_child;
                                            }

                                            html_string += `
                                                <div>Bạn mua đơn hàng: <a href="http://localhost:3000/don_hang/${ma_truy_xuat_dh}">${ma_truy_xuat_dh}</a></div>
                                            `
                                            var mailOptions = {
                                                from: 'huynhanhthithu@gmail.com',
                                                to: req.body.email,
                                                subject: 'Cám ơn bạn đã đặt hàng tại Shop Online',
                                                //text: html_string
                                                html: html_string
                                            };

                                            transporter.sendMail(mailOptions, function(error, info){
                                                if (error) {
                                                  console.log(error);
                                                } else {
                                                  console.log('Email sent: ' + info.response);
                                                }
                                            });
                                            console.log(html_string);
                                            connection.release();
                                            res.json(results);
                                        }
                                    )
                                }
                            }
                        )
                    });
                }
                //res.json(results);
            }
        );
    });

    //res.json([]);
});


router.get('/:ma_truy_xuat_dh', function(req, res, next){
    pool.getConnection(function(err, connection) {
        connection.query('SELECT * FROM don_hang WHERE ma_truy_xuat_dh = ?',
            [req.params.ma_truy_xuat_dh],
            function(err, result, field){
                if(err){
                    console.log(err);
                    throw err;
                }

                res.json(result);
            }
        )
    });

})


router.get('/tim-kiem/:chuoi_tim', function(req, res, next){
    pool.getConnection(function(err, connection) {
        connection.query(`SELECT dh.*, Ten, So_luong, Don_gia, Thanh_tien
        FROM don_hang dh
        JOIN chi_tiet_don_hang ctdh
        ON dh.ID = ctdh.ID_don_hang
        WHERE ma_truy_xuat_dh LIKE ?`,
            ['%' + req.params.chuoi_tim + '%'],
            function(err, result, field){
                if(err){
                    console.log(err);
                    throw err;
                }

                var array_result = [];

                result.forEach((item, index) => {
                    if(array_result[item.ID]){
                        var thong_tin_san_pham = {
                            Ten: item.Ten,
                            So_luong: item.So_luong,
                            Don_gia: item.Don_gia,
                            Thanh_tien: item.Thanh_tien,
                        };

                        array_result[item.ID].list_san_pham.push(thong_tin_san_pham);
                    }
                    else{
                        var thong_tin_san_pham = {
                            Ten: item.Ten,
                            So_luong: item.So_luong,
                            Don_gia: item.Don_gia,
                            Thanh_tien: item.Thanh_tien,
                        };

                        item.list_san_pham = [
                            thong_tin_san_pham
                        ];;
                        array_result[item.ID] = item;

                    }
                });

                res.json(array_result.filter(item => item));
            }
        )
    });
})

module.exports = router;


