const { query } = require('express');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool  = mysql.createPool({
    connectionLimit : 4,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'doc_sach_online_db'
});


/* GET users listing. */
router.get('/', function(req, res, next) {

    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!

        var query_limit = req.query.limit;

        if(query_limit){
            query_limit = ' LIMIT ' + query_limit;
        }
        else {
            query_limit = ''
        }
        // Use the connection
        connection.query('SELECT * FROM the_loai  ' + query_limit, function (error, results, fields) {
          // When done with the connection, release it.
          connection.release();
          // Handle error after the release.
          if (error) throw error;
          res.json(results);
        });
    });

});


router.get('/products_category', function(req, res, next) {

    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!

        var query_limit = req.query.limit;

        if(query_limit){
            query_limit = ' LIMIT ' + query_limit;
        }
        else {
            query_limit = ''
        }
        // Use the connection
        connection.query('SELECT s.*, Loai_sach_truyen FROM sach_truyen s JOIN the_loai tl ON s.ID_the_loai = tl.ID ' + query_limit, function (error, results, fields) {
          // When done with the connection, release it.
          connection.release();
          // Handle error after the release.
          if (error) throw error;
          res.json(results);
        });
    });

});


module.exports = router;
