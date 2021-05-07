var express = require('express');
var router = express.Router();
var authenticate = require('../middleware/auth');


const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

const dbName = 'data_chat';

/* GET users listing. */
router.get('/', function(req, res, next) {
  // var a = 10 + 1;
  // var data = {
  //   data: "data"
  // };
  // res.json(data);

  MongoClient.connect(url, function(err, client) {
    if(err)
        console.log(err);

    const db = client.db(dbName);

    const collection_user = db.collection('users');

    collection_user.find({}).toArray(function(err, ds_user) {
        if(err)
            console.log(err);

        //console.log(ds_user);

        res.json({'xu_ly': 'danh sach user', 'data': ds_user});
        client.close();
    });
  });

  // res.json({
  //   "data": "danh sach user" + JSON.stringify(req.query)
  // });

  //res.send('respond with a resource' + a);
});

router.post('/', authenticate.auth, (req, res) => {
  MongoClient.connect(url, function(err, client) {
    if(err)
        console.log(err);
    const db = client.db(dbName);
    const collection_user = db.collection('users');
    collection_user.insertMany(req.body, () => {
        res.json({
            'xu_ly': 'import nhieu user 1 lúc',
            data_send: req.body
        });
    })
});
  //res.json({'xu_ly': 'import nhieu user 1 lúc'});
}); // insert

router.put('/', (req, res) => {
  res.json({'xu_ly': 'update nhieu user 1 lúc'});
}); // create or update api

router.delete('/', (req, res) => {
  res.json({'xu_ly': 'delete nhieu user 1 lúc'});
}); // delete

// router.all(); // thich cai nao chay cai do
// router.patch(); //move
// router.head(); // send before to get token
// router.options(); // check server
// router.purge(); // re-check server

module.exports = router;
