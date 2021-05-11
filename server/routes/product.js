var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'doc_sach_online_db'
});

/* GET users listing. */
router.get('/:ID_sach', function (req, res, next) {

    //console.log(req.params.id_san_pham);

    pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!

        // Use the connection
        // connection.query(`SELECT * FROM sach_truyen WHERE ID = '${req.params.ID_sach}'`, function (error, results, fields) {
        connection.query(`SELECT s.*, Ten_tac_gia, Ten_nxb FROM sach_truyen s JOIN tac_gia tg ON s.ID_tac_gia = tg.ID
        JOIN nha_xuat_ban nxb ON s.ID_nha_xuat_ban = nxb.ID
        WHERE s.ID = '${req.params.ID_sach} '`, function (error, results, fields) {
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;

            res.json(results);
        });
    });

    //res.json([]);

});

router.delete('/:ID_sach', function (req, res, next) {

    //console.log(req.params.id_san_pham);

    pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!

        // Use the connection
        connection.query(`DELETE FROM sach_truyen WHERE sach_truyen.ID = '${req.params.ID_sach}'`, function (error, results, fields) {
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;
            res.json(results);
        });
    });

    //res.json([]);

});

router.put('/:ID_sach', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(`UPDATE sach_truyen SET ID= NULL, Type= ?, Ten= ?, ID_tac_gia= ?, ID_the_loai= ?, ID_nha_xuat_ban= ?, Doc_thu= ?, Kich_thuoc= ?, SKU= ?, Hinh= ?, So_trang= ?, Don_gia= ?, Tinh_Trang= ?, Alias= ?, Noi_bat= ? WHERE sach_truyen.ID ='${req.params.ID_sach}' `, [
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
    })
})
module.exports = router;
