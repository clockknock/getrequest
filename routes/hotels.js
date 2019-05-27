var express = require('express');
var router = express.Router();

/* GET users listing. */
router.all('/:integrationId', function (req, res, next) {
    console.info(JSON.stringify(req.headers, null, 2), '\n ');
    console.info(JSON.stringify(req.params.integrationId, null, 2), '\n ');
    console.info(JSON.stringify(req.body));
    res.send('respond with a resource,hello');
});

module.exports = router;
