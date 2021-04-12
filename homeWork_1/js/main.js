"use strict"
//задание 1, В переменной n хранится двузначное число. 
//Найти сумму цифр числа n и вывести в консоль.
let a = 42;
//let b = 0;
//let c = 0;
//b = a % 10;
//c = (a - a % 10) / 10
//console.log(b+c)
let res = (a - a % 10) / 10 + a % 10;
console.log(res);
//////let n = 42 % 10 + (42-42 % 10);
//////console.log(n);


//задание 2, Поменять значение двух переменных местами. без использования третьей переменной.
a = 5;
let b = 7;
a = a + b;// a=12
b = (b - a)*-1;
a= (b-a)*-1;

console.log(a, b);
//[a, b] = [b, a];
//console.log(`${a} ${b}`);

//задание 3, Задать высоту, ширину и длину прямоугольного параллелепипеда,найти его площадь, 
//результат вывести в консоль.
//a-ширина; b-длина; c-высота;
a = 5,  
b = 10;
let c = 15; 
res = 2 * (a * b + b * c + a * c);
console.log(res);

//задание 4, Задача на тернарный оператор. Даны переменные типа number start и end. 
//Даны 2 переменные типа number start и end. 
//Если start меньше end переменной between присвоить значение end - start,
//в противном случае -1
let start=100;
let end=30;
let between = (start < end) ? (end - start) : (-1);
console.log(between);
//let isActive = true;
//let code = isActive ? 1 : 0;  1 
// n = 9;
// res = n % 2 == 0 ? n / 2 : n * 2; /* 18 */