'use strict'
let title="JavaScript";//h2
let duration = 2.5;//p Продолжительность:
let price = 2000;//p Стомость
let background = "yellow";

let html = `<div style="background:yellow;">
<h2>${title}</h2>
<p>Продолжительность: ${duration}</p>
<p>Стомость ${price}$</p>`
document.body.innerHTML=html;
//строки внутри храняться как массив символов, поезд ['п', 'о', 'е', 'з', 'д'] и благодаря этому мы можем узнать размер строки. строки хранятсья в кодировке UTF-16
//строки в js не изменны, можно на основе исходной создать новую строку 
let train = "Поезд";
console.log(train.length); //5 , length помогает узнать размер строки
console.log(train[2]);//e

//
//методы строк
//1. приведение к регистру 
let newStr=train.toUpperCase();
console.log(newStr);

newStr=train.toLowerCase();
console.log(newStr);


//2. trim, позволяет убрать пробелы с начала и с конца строки. 
train = "        Поезд           ";
newStr = train.trim();
console.log(newStr); //"Поезд"

//3. 
train = "Длинный поезд";
console.log(train.includes('ез')); //includes метод чувствителен к регистру. он проверяет есть ли в текст 'ез' и вернёт true если нет false
console.log(train.startsWith('По')); //Начинается ли строка с указанной последовательности либо нет, тоже чувствителен к регистру.  
console.log(train.endsWith('зд'));  //Заканчивается ли строка на 'зд' 

//4. массив из строки.
let arrFromStr = train.split(' '); // '' какждую букву, ' ' пробел, ', ' пробел и запятая. split разбивает строку по разделителю, создовая массив, разделитель в эллемент массива не в ходит 

//join из массива в строку
let textFrom = arrFromStr.join(': ');
console.log(textFrom); // "Длинный: Поезд"

//сравнение строк 
train = 'Поезд';
let train2 = 'поезд';

console.log(train === train2);//false
console.log(train.toLowerCase() === train2.toLowerCase());//false
// П 1055
// п 1087
let compareRes = train.localeCompare(train2, undefined,{sensitivity: 'accent'});//сравнение без учёта регистра 
compareRes = train.toLowerCase().localeCompare(train2.toLowerCase());
//у одной строки метод вызывает, втрорую строку в метод передаём, аоргемент как функцию. 
// 0 если строки равны
// отрицательное число, если train меньше train2  
//положвительное число, если train больше train2  
console.log(compareRes);
train = 'Яблоко'
console.log(train.substring(1, 4));// 'бло'
console.log(train.substring(1));// 'бло'

//заменить все буквы в слове на строчные, а первую на загалвную 
let someStr='fdgdsfgseg43t3v4tFSSDF'
// 'f' + 'dgdsfgseg43t3v4tfssdf'
someStr=someStr[0,1].toUpperCase() + someStr.substring(1).toLowerCase();
console.log(someStr);

let getStr = str => str[0].toUpperCase()+str.substring(1).toLowerCase();

getStr = str => str[0].toUpperCase()+str.substring(1).toLowerCase();

console.log(getStr('fdgdsfgseg43t3v4tFSSDF'));
console.log(getStr('fdgdsfgseg43t3v4tFSSDF'));

