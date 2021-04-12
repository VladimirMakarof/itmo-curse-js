'use strict'
//if, switch

let state = 0;

// если условие не задано, но будет приводится к true или false, к булевом значению 

if (state === 0) {

	console.log("загрузка завершена");
} else if (state ===1){ // если ещё какие либо условия, добавляются через else if 
	console.log("Загрузка ...")
} else{ // всегда один и всегда в конце, else
 	console.log("ошибка статуса загрузки");
 }

 //данные переменные age и exp
 //если значение переменной age больше 100, 
 //вывести в консоль "мы Вам перезвоним"
 //в противном случае перейти к проверке exp
 // если exp меньше 5, вывести "вы подходите на должность стажёра"
 // в противном случае вывести "вы подходите на должность разработчика"

let age = 42;
let exp = 42;
if(age <= 18 || age < exp || exp < 0 ){
	console.log("Ошибка ввода данных");
} else if (age > 100){
	console.log("мы Вам перезвоним");
} else if (exp < 5 ){
	console.log("вы подходите на должность стажёра");
} else if  (exp > 5) { //после else не может быть ничего кроме фигурных скобок 
	console.log("вы подходите на должность разработчика");
}

let mounth = "январь";
switch (mounth){
	case "декабрь":
	case "январь":
	case "февраль":
		document.body.style.background = "blue";
		break;
	case "март":
	case "апрель":
	case "май":
		document.body.style.background = " yellow";
		break;
	case "июнь":
	case "июль":
	case "август":
		document.body.style.background = " green";
		break;
	case "сентябрь":
	case "октябрь":
	case "ноябрь":
		document.body.style.background = " orange ";
		break;
	default: 
		console.log("Ошибка ввода")
		document.body.style.background = " white ";
		break;
}

/* Данные переменные 
sum (12000) - сумма покупки
code (9075) номер купона
code: 4653 - скидка 30%;
code: 2942, 9075 - скидка 20%;
code: 7899, 1188, 9045 - скидка 10%;
в остальных случаях скидка не предусмотрена 
вывести сумму с учётом скидки*/
let sum = 12000;
let code = 9075; 
switch(code){
	case 4653:
		sum = sum * 0.7;
		break;
	
	case 2942:
	case 9075:
		sum = sum * 0.2;
		break;

	case 7899:
	case 1188:
	case 9045:
		sum = sum * 0.1;
		break;
	default: 
		console.log("скидка не предусмотрена ")
		break;
}

console.log(sum);
