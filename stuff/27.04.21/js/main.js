'use strict'
//локальное хранилище localstorage 
let storage = localStorage;
// {'ключи1': 'значение'}
// {'ключи2': 'значение'}
// {'ключи3': 'значение'}
// [object] Object]
//сохранение данных в локальное хранилищеreв - значение 
// color -ключ, 
storage.setItem("color", "red");
storage.setItem("background", "yellow");
storage.setItem("background", "green");
// получить данные из локаьного хранилища 
console.log(storage.getItem("color")); // red
console.log(storage.getItem("background")); // yellow

let arrData = [
{
	background: "red",
	color: "green"
},
{
	background: "yellow",
	color: "black"
},
{
	background: "pink",
	color: "purple"
}
];

let arrToJson = JSON.stringify(arrData);
//тип данных arrToJson - String 
console.log(arrToJson);

storage.setItem("array", arrToJson);
//тип данных fromStorage - String 
let fromStorage = storage.getItem("array");

//тип данных fromStorage - Array
let arrFromStorage = JSON.parse(fromStorage);
console.log(arrFromStorage);

arrFromStorage.push({background:"white", color: "blue"});

storage.setItem("array", JSON.stringify(arrFromStorage));
// переводим в строку после добавляем в массив по тому же самому ключу 


