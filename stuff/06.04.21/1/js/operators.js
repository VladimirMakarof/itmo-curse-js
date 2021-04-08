"use strict"
//арифметические операторы
let a = 3, b = 5, c = '8', d = "семь";
let res = a + b;
console.log(res);//8
res = a + c; //"3" + "8"
console.log(res); //"38"
res = a + " " + d; // "${a} ${b}" для пробела
console.log(res); //"3 семь"
res = +c;
console.log(res); // "8"
res = +d;
console.log(res); // "Nan" относится к числам, но числом не является. и всегда указывается на то что арифметическую операцию не удалось выполнить.
res = a * d;
console.log(res);// "Nan"
res = a * c;
console.log(res);// 24

a = 7;
b = 3;
res = a / b;
console.log(res); //2.333333333333333
res = a / 0;
console.log(res); //infinity
res = -a / 0;
console.log(res); //infinity

a = 7;
b = 2;
res = a % b;
console.log(res); //1
// 7 % 2 = 3.5 3.5 = 0.5 0.5 = 1
console.log(9 % 8);//1
console.log(9 % 7);//2
console.log(9 % 6);//3

a = 8;
b = 2;
res = a % b;
console.log(res); //0 число делиться без остатка

//операторы присваивания 
let num = 10;
num = num + 10; // num +=10; оператор присваивания 
num *= 10; // num * 10; 
num /= 10; // num / 10;
num -= 10; // num - 10;
console.log(num); //10

//операторы сравнения, сравнивают и возвращают результат true или false
a = 5;
b = 8;
c = "5";

res = a > b;
console.log(res); // false
console.log(a >= b);//false
console.log(b <= 8);//true
console.log(b < 8);//false

console.log(a == c); //true (не проверяет типы данных)
console.log(a === c); // false (проверяет типы данных, если разные то сразу false)
console.log(a === +c); //true ()

//тернарный оператор ?
a = 8;
b = 2;
		//условие/логическое выражение ?
res =  a % b === 0 ? a / b : a * b; // true первая часть до : false что после :
console.log(res); //4

res =  a % b === 0 ? "чётное" : "не чётное";
console.log(res);

res =  a % b === 0  // true : false; операторы сравнения возвращают буливые типы данных
console.log(res);

//Логические операторы 
// && и
// || или 
a = 8;
b = 2;

res =  (a % b === 0) && (b > 100) ? "true" : "false"; //если первый операнд false то операнд && сразу возвращает false и не переходит к проверке второго операнда
console.log(res);// "false"

res = (a % b === 0) || (b > 100) ? "true" : "false"; // возвращает true если хотя бы один из операнда соответствует условию то true. сначала проверяется первый операнд, и сразу возвращает true
console.log(res); //"true" 

// ! НЕ  значение НЕ меняет  операнда на противоположное 
let selected = true;
res = !selected;
console.log(res); //false

// 0, null, undefined, Nan, ""
selected = ""; // false преобразуется в 0, null, undefined, Nan, "" всё остальное преобразуется к true `
res = !selected ? "true" : "false" ;
console.log(res); //"true"