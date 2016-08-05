var names = [];

for (var i = 0; i < 5; i++) {
	var name = prompt('Enter the name: ');
	names.push(name);
}

var searchName = prompt('Please, enter the user name: ');
var mes = '';

for (var i = 0; i < 5; i++) {
	if (names[i] === searchName) {
		mes = searchName + ', вы успешно вошли';
	}
}

if (mes == '') {
	alert('Error! The user name is not found.')
} else {
	console.log(mes);
}