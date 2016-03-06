var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("index is router");
}); // get home

module.exports = router;
