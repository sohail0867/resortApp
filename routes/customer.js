var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
 	res.render('customer');
}); // get home

router.post('/', function(req, res, next) {
	
  var coll = req.db.get('customer');
  coll.insert({
		fname: req.body.fname,
		lname: req.body.lname,
		phone: req.body.phone,
		address: req.body.address,
		email: req.body.email,
		state: req.body.state,
		province: req.body.province,
		zip: req.body.zip
	}, function(err, doc){
		if(err){
			res.send("there was error");
		}else {
			res.redirect("/customer");
		}
	});

}); // post

module.exports = router;
