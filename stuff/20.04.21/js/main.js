'use strict'
let userData = {};
console.log=(userData);
// установили значение свойства name объекта userData
userData.name = 'Anna';
console.log(userData.name); //'Anna'

userData.age = 27;
console.log(userData.age);
console.log(userData['age']); // имя свойство пишем строкой 
userData.favouriteColors = ['red', 'orange'];
console.log(userData.favouriteColors[1]);
console.log(userData.img); //undefined
// проверка на наличие свойства в объекте с помощью
// 1. првоерка на undefined, если if (userData.img === undefined) userData.img = 'default.png';
// 2. if ('githubLink' in userData) проверка с помощью оператора in
userData.login=null;
if (!('githubLink' in userData)) user.githubLink = null;

let jsBook = {
	title: 'About JS', 
	author: 'JS Junior',
	pageCount: 102,
}
let cssBook = {
	title: 'About CSS', 
	author: 'CSS Junior',
	pageCount: 1700,
}
userData.books=[jsBook, cssBook];
console.log(userData.books[1].pageCount) // обращение  1700
console.log(userData.books[1]['pageCount']) // 1700
// вывестив консоль название книг из userData,
// количество страни которых больше 500
for (let book of  userData.books){
	if (book.pageCount>500) console.log(book.title);

}

for (let i = 0; userData.books.length; i +=1){
	console.log(userData.books[i]);
	if(userData.books[i].pageCount>500){
		console.log(userData.books[i].title);
	}
}

let massages = [ //запросить у пользотваеля код и добавить в отдельный массив 
// тексты сообщений, код которыъ выше указанного пользователем
{
	text: 'Срочное',
	priority: 'high',
	code: 99
}
{
text: 'Просто сообщение',
	priority: 'low',
	code: 8
}
{
	text: 'срочное сообщение',
	priority: 'high',
	code: 88
}
]
let userData=parseInt(prompt('Введите код'));
let texts = [];
for (let of messages){
	if(message.code > userCode) texts.push(message.text);
}
console.log(texts);

//перебор обектов - цикл for in
for (let propertyName in jsBook){
	console.log('Имя свойства ${propertyName}, значение ${jsBook[propertyName]}');
}


let keys = Object.keys(jsBook); // запрашивает keys возращает с ключами свойств 
console.log(keys); // ['title', 'author', 'pageCount']

// массив со значениями объекта jsBook
let values = Object.values(jsBook);
console.log(values); // ['About JS', 'JS Junior' ]

// массив пар [ключ: (свойство): значение]
let entries = Object.entries(jsBook);
console.log(entries);

// деструктуризация объект 

let jsBook = {
	title: 'About JS', 
	author: 'JS Junior',
	pageCount: 102,
}

let {title, author, pageCount, img = 'default.png'} = jsBook;
console.log(title);
 console.log(author);
 console.log(pageCount);
 console.log(img);
 console.log(others);

 let{login, pwd, ...others } = {
login: "qwerty",
pwd: "qwe12345",
phone:"+9999999",
email:"qwe@mail.ru"
 }
console.log(login);
console.log(pwd);
console.log(others);

let {name: userName, age: userAge} = {name: "Anna", age: 33};
console.log(userName);
console.log(userAge);

// деструктизация объекста в параметрах функции
let jsBook = {
	title: 'About JS', 
	author: 'JS Junior',
	pageCount: 102,
}
function doSmth({ title, author, img ='defaut.png'}){
console.log(title);
console.log(author);
console.log(img);
}
doSmth(jsBook);