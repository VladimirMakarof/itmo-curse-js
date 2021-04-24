'use strict'

/*1. Задача на if
Дана целочисленная переменая count - количесво верных ответов.
В зависимости от значения этой переменнной вывести в консоль оценку:
100 - 90 правильных ответов - отлично
89 - 60 правильных ответов - хорошо
59 - 40 правильных ответов - удовлетворительно
39 - 0 правильных ответов - попробуй потом*/
let count = 94;

if (count<=100 && count>=90 && Number.isInteger(count)) {
	console.log("отлично");
}  else if (count<=89 && count>=60 && Number.isInteger(count)) {
	console.log("хорошо");
} else if (count<=59 && count>=40 && Number.isInteger(count)){
	console.log("удовлетворительно");
} else if (count<=39 && count>=0 && Number.isInteger(count)){
	console.log("попробуй потом");
} else {
	console.log("введите целое число от 0 до 100");
}

/*2. Задача на switch
Пользователь вводит 3 числа:
1е - первый операнд
2e - второй операнд
3е - оператор
В зависимости от третьего введенного числа нужно вывести в консоль:
сумму, разность, умножение, деления чисел, которые ввел пользователь.
Если 3е введенное число 3, нужно найти сумму,
если 5 - разность,
если 7 - результат умножения,
если 9 - результат деления.*/
/* let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число ");
let c = +prompt("Введите номер операции 3 сумма 5 разность 7 умножения 9 деления");
	switch(c){
		case 3:
    		console.log(a + b);
    		break;
    	case 5:
    		console.log(a - b);
    	break;
    		case 7:
    		console.log(a * b);
    	break;
    		case 9:
    		console.log(a / b);
    	break;
    	default:
        	console.log("Ошибка ввода")
        break;
}*/

/*3. Задача на Math.random() и if
Написать код, который будет проверять попало ли случайно сгенерированное целое число из отрезка [10;500]
в интервал (25;200) и выводить результат в консоль.
Примеры работы программы:
Число 345 не содержится в интервале (25;200)
Число 110 содержится в интервале (25;200)*/

let random = Math.floor(Math.random()*500)+1; 
	if(random >= 25 && random <= 200){
		console.log("число" + " "+ random + " " + "содержится в интервале 25 - 200");
	} else if (random <= 25 || random >= 200){
		console.log("число" + " "+ random + " " + "не содержится в интервале 25 - 200");
	}
	
/*4. Задача на цикл for:
Вывесити в консоль первые 20 элементов последовательности 2 4 6 8 10 12 ...*/

for (let i = 2; i < 20; i=i+2 ) { //a+=2
	console.log(i+2);	
}


/*5. Задача на циклы: for или while
Вывести на экран ряд чисел Фибоначчи, состоящий из n элементов.
Числа Фибоначчи – это элементы числовой последовательности
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …, в которой каждое последующее число равно сумме двух предыдущих.*/
/*
let a, b, result;
 a = 1;
 b = 0;
 result = b;
 for (let i=1; i<=20; i++) {
  document.write(result+"<br/>");
  result = a + b;
  a = b;
  b = result;
  }*/

/*6. Задача на 2 цикла for
Вывести в консоль таблицу умножения.
Пример вывода:
1*1=1
2*1=2
3*1=3
4*1=4
5*1=5
6*1=6*/
for (let i = 1; i <= 10; i++ ) { 
	for (let k = 1; k <= 10; k++) {
	let resultt=(`${i}*${k}= ${i*k}`);
	document.write(resultt+ '<br>');
}
	document.write( '<br>');
}

/*7.* На цикл while
Пользователь!!! загадывает число в диапазоне от [1 до 100]
Программа пытается его угадать (используйте метод !!!бинарного поиска - деление отрезка на 2).
Программа может задавать пользователю вопросы:
Число равно ...? / Число больше ...? / Число меньше ...? и в зависимоти от ответа пользователя принимать решения.
Вместо текстовых ответов ДА/НЕТ, можно использовать числа 0 - НЕТ и 1 - ДА*/
//let minimum = 1, maximum = 100;
//while (true) { // 1 - "Да" 2 - "Нет"
	// let tmp = minimum + maximum / 2 (pront)
	// let answer это число равно tmp?
	// если answer равно 1 -> break
	// answer = это число меньше tmp? 
	// если answer равно 1 -> maximum = tmp 
	// если answer равно 0 -> minimum = tmp
//}
let arr = Array(100).fill(1).map((v,i) => v + i); // будем считать что уже сделан .sort
function binaryGuess(arr) {
  if (arr.length === 1) {
    return alert('Загаданое число было ' + arr[0]);
  };
  if (arr.length < 1) {
    return alert('Где то меня обманули');
  };
  let nextIdx = Math.floor(arr.length / 2); 
  
  if (confirm('Ответ ' + arr[nextIdx] + ' ?')) {
    return alert('Я это и так знал');
  } else {
    if (confirm('Больше ?')) {
      binaryGuess(arr.slice(nextIdx));
    } else {
      binaryGuess(arr.slice(0, nextIdx - 1));
    };	
  };
};

function startGuessing(r) {
  alert('Ты загадал ' + r);
  binaryGuess(arr);
  if (confirm('Повторим ?')) {
    startGuessing(rand());
  };	
};

startGuessing(rand());

function rand() {
  return Math.floor(Math.random() * (100 - 1) + 1);
};