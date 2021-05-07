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


module.exports = router;
