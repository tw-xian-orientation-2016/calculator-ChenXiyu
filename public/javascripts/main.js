var number1 = null;
var operator = null;
var flag = false;

function clickNumber(e){
	var screen = $("input");
	var num = e.dataset.number
	var preNum = screen.val();
	if(flag == false){
		screen.val(preNum + num);
	}else{
		number1 = screen.val();
		screen.val(num);
		flag = false;
	}
}

function clearScreen(){
	number1 = null;
	operator = null;
	flag = false;
	$("input").val("");
}

function operat(e){
	if (operator == null){
		number1 = $("input").val();
		operator = e.dataset.operator;
		$("input").val("");
	}else{
		switch(operator){
			case "+":
				number1 = service.plus(number1 , $("input").val());
				operator = e.dataset.operator;
				$("input").val(number1+"");
				flag = true;
				break;
			case "=":
				switch(operator){
					case "+":
						number1 = service.plus(number1 , $("input").val());
						operator = e.dataset.operator;
						$("input").val(number1+"");
						flag = true;
						break;
					case "*":
						number1 = service.multiplication(number1 , $("input").val());
						operator = e.dataset.operator;
						$("input").val(number1+"");
						flag = true;
						break;
					case "-":
						number1 = service.sub(number1 , $("input").val());
						operator = e.dataset.operator;
						$("input").val(number1+"");
						flag = true;
						break;
					case "/":
						number1 = service.division(number1 , $("input").val());
						operator = e.dataset.operator;
						$("input").val(number1+"");
						flag = true;
						break;
					case "%":
						number1 = service.persent($("input").val());
						$("input").val(number1+"");
						flag = true;
						break;
					default:
						number1 = service.negative($("input").val());
						$("input").val(number1 +"");
						flag = true;
						break;
				}
				$("input").val(number1+"");
				operator = null;
				number1 = null;
				break;
			case "*":
				number1 = service.multiplication(number1 , $("input").val());
				operator = e.dataset.operator;
				$("input").val(number1+"");
				flag = true;
				break;
			case "-":
				number1 = service.sub(number1 , $("input").val());
				operator = e.dataset.operator;
				$("input").val(number1+"");
				flag = true;
				break;
			case "/":
				number1 = service.division(number1 , $("input").val());
				operator = e.dataset.operator;
				$("input").val(number1+"");
				flag = true;
				break;
			case "%":
				number1 = service.persent($("input").val());
				$("input").val(number1+"");
				flag = true;
				break;
			default:
				number1 = service.negative($("input").val());
				$("input").val(number1 +"");
				flag = true;
				break;
		}
	}
}
var service = {};

service.plus = function(number1 , number2){
	return Number(number1) + Number(number2)
}

service.multiplication = function(number1 , number2){
	return Number(number1)*Number(number2);
}

service.sub = function(number1, number2){
	return Number(number1 , number2);
}

service.persent = function(number1){
	return Number(number1) / 100;
}

service.division = function(number1 , number2){
	return Number(number1) / Number(number2)
}

service.negative = function(number1 ){
	return -Number(number1)
}
