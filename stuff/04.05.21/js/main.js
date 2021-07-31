//let book1 = {
// title: 'Выразительный JavaScript',
// author: 'Марейн',
// pageCount: 470,
//  price: 800
//};
//let book2 = {
// title: 'Node js on action',
// author: 'Канетелон',
//pageCount: 510,
//  price: 600
//};

let book1 = new Book('Выразительный JavaScript', '800');
console.log(book1);
// использование геттеров и сеттеров 
book1.author = 'Марейн'; // есил мы присваиваем значение свойства, то мы образаемся к сеттору и будут выполняться все инструкции что прописаны внутри
console.log(book1.author) // геттер 
book1.pageCount = 100;

let book2 = new Book('Node js on action', '600');
console.log(book2);

book2.author = 'Канетелон'; // есил мы присываиываем значение свойства, то мы образаемся к сеттору и будут выполняться все инструкции что прописаны внутри
console.log(book2.author) // геттер 
book1.pageCount = 500;

let storage = new Storage('Библиотека');
// вызов метода 
storage.addBook(book1);
storage.addBook(book2);
console.log(storage);