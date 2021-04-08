/*однострочный комментарий 
// ываыва ываы dfsd fsd fsd fsd fsdf sd а
/* js состоятит из инструкций, в конце инструкции ставиться ; */
'use strict'
//отладка 
console.log('Данные для отладки');
// переменные 
//обявление переменной
let age = 26; 
age = 27;
// вывести переменные 
console.log(age);
let userLogin = 'qwert', password = "qwerty123"

let height = 400;
let width = 700;

let active, closed = 1; 

//значение константы необходимо присвоить в моменты объявления
//нелья изменить в дальнейшем
const PI = 3.14; //каждое последующее слово разделяется через нижнее подчервивание. ELEMENT_STATE
console.log(PI); 

//var data = "данные" 
// ТИПЫ ДАННЫХ: 1. ссылочные.  2. приметивные. 
//числа numbers
height = 4.44;
width = -700;
let degree = -100;
degree = "-100";
//2. строка тип string
degree = "-10C";
userLogin = 'wind009';
userLogin = "qwe";
let loginInfo = `значение переменной userLogin ${userLogin} 2+2`;
console.log(loginInfo);
//3. логический тип: тип boolean
active = true;
closed = false;
console.log(active, closed);
//4. null, значение неизвестно
let books = null;
//5. undefined Значение не было присвоенно
let elem;
console.log(elem);
// Определение типа данных переменнной typeof имяПеременной.  
console.log(typeof active);
console.log(typeof loginInfo);
console.log(typeof age);
console.log(typeof books);