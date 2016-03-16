var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile("./public/index.html")
});

router.get('/plus',function(req,res,next){
	var number1 = parseFloat(req.param("number1"))
	var number2 = parseFloat(req.param("number2"))
	var result = number1 + number2
	res.send(result + '');
});

router.get('/division',function(){
	var number1 = parseFloat(req.param("number1"))
	var number2 = parseFloat(req.param("number2"))
	var result = number1 / number2
	res.send(result + '');

});

router.get('/multiplication',function(){
	var number1 = parseFloat(req.param("number1"))
	var number2 = parseFloat(req.param("number2"))
	var result = number1 * number2
	res.send(result + '');
});

router.get('/negative',function(req,res,next){
	var number = -parseFloat(req.param("number"));
	res.send(number+'');
});

router.get('/persent',function(){
	console.log("i'm here");
	var number = parseFloat(req.param("number"));
	res.send(number  +'');
});

router.get('/sub',function(){
	var number1 = parseFloat(req.param("number1"))
	var number2 = parseFloat(req.param("number2"))
	var result = number1 - number2
	res.send(result + '');
});

module.exports = router;
