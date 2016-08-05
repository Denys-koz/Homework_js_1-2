var num = Number(prompt('Enter the number', 2));
var exp = Number(prompt('Enter the exponent', 2));

// //проверка на целочисленность
if (Number.isInteger (num) && Number.isInteger (exp)) {
	console.log('Result = ', pow(num, exp) );
} else {
	console.log('Please, enter only integer numbers!');
}

//Возвращает num в степени exp

function pow(num, exp) {
	var result = 1;
 	var	e = Math.abs(exp); 

	for (var i = 0; i < e; i++) {
		result *= num;
	}

	if (exp >= 0) {
		return result;
	} else {
		return 1/result;
	}
}
