'use strict';

let a = 3, b = 9;
let result = a + b;
console.log(result);

let n=12, m = 67;
result = n + m;
console.log(result);

function getSum(first, second){ //параметры функции 
	return first + second;
}

let l = 9, k = -166;
let sum = getSum(l, k);
console.log(sum);

let x = 12, y = 91;
sum = getSum(x, y);
console.log(sum);

console.log(getSum(56, 0));

//функции может работь с внешними переменными. 


//написать функцию, которая возращает минимальное из 2х чисел 
function getMin(a, b){
	//return a < b ? a : b;
	if (a < b) return a;
	return b;
}

console.log(getMin(3, 7))


//функция принимает на вход 2 параметра имя и возраст. и формирует строку приветсвтия. 
// если возраст вне диапазона [7, 200] - "Укажите другой возраст"
// если возраст меньше 18 - "вы не можете осуществить покупку"
// в остальных случаях - "Весь функционал доступен"
function greetingStr(age, name="Гость"){ // если мы значение мы не передаём, то значение параметра будет указанно по умолчанию. 
										//	значние по умолчанию не обязательный параметр, и должны идти после обязательного.
	if (!age || age > 200 || age <7) return `${name}, Укажите другой возраст`;
  	if (age < 18)  return `${name}, Вы не можете осуществить покупку`;
    return `${name}, Весь функционал доступен`;}
/*========================================================================
    let str;
    if (age > 200 || age , 7){
    	str = `${name}, Укажите другой возраст`;
    } else if (age < 18){
    	str = `${name}, Вы не можете осуществить покупку`;
    }
    else if (age < 18){
    	str = `${name}, Весь функционал доступен`;
    }
    return str;
}
*/
let str = greetingStr(34, "Алиса");
console.log(str);
 str = greetingStr(27);
console.log(str);
// в случае нет одного из 2 аргументов и далее будет равно undefined
//===================================================================

function painElem(elem, color="yellow"){
	elem.style.background = color;
	//let body = document.body;
	//body.style.background = "red";
}
painElem(document.body, "green");
painElem(document.body);

/*==============*/
let catName = "Tom";
let codes = [4, 5, 6];
let ints = [4, 5, 6, 8, 9];
function changeName(str){
	str += "Кот";
}
function changeCodes(arr){
	for (let i = 0; i < arr.length; i += 1){
		arr[i] *= 10;
	}
}
changeName(catName);
changeCodes(codes);
console.log(catName);
console.log(codes); 
//все ссылочные типы функция передаёт ссылки, а когда работаем с примитивами происходит копирование 

function getAverage(...nums){ //переменное колличество аргументов 
	let sum = 0;
	for (let n of nums){
		sum += n;
	}
	return sum / nums.length;
}

let avg = getAverage(8, 12, -90, 45, 45, 11, 800);
console.log(avg);
avg = getAverage(56, 0, 1);
console.log(avg);


function fullInfo(name, surname, ...other){

}
fullInfo(name"Олег", "Петеров", "22 года", "qwe@mail.ru");
fullInfo(name"Елена", "Петерова", );

//если функция принмает на вход несколько агргументов, и есть три точки оператор , то этот оператор должен идти в самом конце