var number1 = null;
var operator = null;
var flag = false;
var result = '0';

function clickNumber(e){
	if(result === '0'){
		result = '';
	}
	result += e.dataset.number;;
	$("input").val(result);
}

function clearScreen(){
	number1 = null;
	operator = null;
	result= '0';
	$("input").val(result);
}

function negativeOperator(){
	if(result != '0'){
		service.negative($("input").val(), function(resultNumber){
			$("input").val(resultNumber);
		});
	}
}

function persentOperat(){
	if(result != '0'){
		service.persent($("input").val(),function(resultNumber){
			$("input").val(resultNumber);
		});
	}
}

function plus(){
	number = result;
	result ='0';
	if(operator != null && number != null){
		calculat(operator);
	}
	operator = '+';
}

function division(){
	number = result;
	result ='0';
	if(operator != null && number != null){
		calculat(operator);
	}
	operator = '/';
}

function multiplication(){
	number = result;
	result ='0';
	if(operator != null && number != null){
		calculat(operator);
	}
	operator = 'x';
}
function sub(){
	number = result;
	result ='0';
	if(operator != null && number != null){
		calculat(operator);
	}
	operator = '-';
}


function calculat(o){
	switch(o){
		case '+':
			service.plus(number ,$("input").val(), statusUpdater);
			break;
		case '-':
			service.sub(number ,$("input").val(), statusUpdater);
			break;
		case 'x':
			service.multiplication(number ,$("input").val(), statusUpdater);
			break;
		case '/':
			survice.division(number ,$("input").val(), statusUpdater);
			break;
	}
}

function statusUpdater(r){
	$("input").val(r);
	number = r;
	result ='0';
}

var service = {};
service.plus = function(number1 , number2 ,callback){
	$.get('/plus',{'number1':number1,'number2':number2},function(result){
		callback(result);
	})
}
service.multiplication = function(number1 , number2, callback){
	$.get('/multiplication',{'number1':number1,'number2':number2},function(result){
		callback(result);
	})
}
service.sub = function(number1, number2 ,callback){
	$.get('/sub',{'number1':number1,'number2':number2},function(result){
		callback(result);
	})
}
service.persent = function(number1, callback){
	$.get('/persent',{number:number1},function(result){
		callback(result);
	});
}
service.division = function(number1 , number2 , callback){
	$.get('/division',{'number1':number1,'number2':number2},function(result){
		callback(result);
	})
}
service.negative = function(number1, callback ){
	$.get('/negative',{number:number1},function(result){
		callback(result);
	});
}
