var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    console.info(JSON.stringify(req.headers, null, 2), '\n ');
    console.info(JSON.stringify(req.url, null, 2), '\n ');
    console.info(req.body);
    res.send('respond with a resource');
});

module.exports = router;
