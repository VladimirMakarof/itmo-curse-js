'use strict'


//Задача 1
//Написать функцию, которая принимает на вход объект obj (например, goods), число from и число to.
//Если значение from и to не числа, а obj не объект, функция прерывает свою работу и возвращает false.
//Если данные валидны, функция формирует и возвращает новый ОБЪЕКТ с объектами,
//значения свойств price которых лежат в диапазоне от значения from до значения to, не включая to.

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};


let fun = (obj, from, to) => {
    if (typeof from === "number" && typeof to === "number" && typeof obj === "object") {
        let newObj = {};
        for (let tool in obj) {
            console.log(obj[tool].price);
            if (`${obj[tool].price}` >= from && `${obj[tool].price}` < to) {
                newObj[tool] = `${obj[tool].price}`;
            }
        }
        return newObj;
    } else return "false";
}
console.log(fun(goods, "asdd", 1000));

//Задача 2
//Написать функцию, которая принимает на вход объект obj (например, goods), название (title) и количество (countToCart).
//Если значение title не строка, obj не объект, а count не число, функция прерывает свою работу и возвращает false.
//Функция должна найти товар с указанным названием (title):
//если количество позволяет, то уменьшить значение свойства count в переданном объекте на countToCart вернуть true,
//если не позволяет, то вывести информацию об этом в консоль и вернуть false.

let changeCount = (obj, title, countToCart) => {
    if (typeof title === "string" && typeof obj === "object") {
        for (let name in obj) {
            if (obj[name].title === title) {
                if (obj[name].count - countToCart >= 0) {
                    obj[name].count -= countToCart;
                    return "true";
                } else return "false";
            }
        }
    } else return "false";
}
console.log(changeCount(goods, "Арфа", 2));
console.log(goods.harp.count);


//Задача 3
//Написать функцию, которая принимает на вход объект obj (например, books) и фамилию автора.
//Создает и возвращает  новый массив, в который войдут все книги указанного автора,
//если такого автора нет, возвращает пустой массив.

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы' },
    { author: 'Толстой', title: 'Война и мир' },
    { author: 'Лермонтов', title: 'Тамань' },
    { author: 'Гончаров', title: 'Обломов' },
    { author: 'Лермонтов', title: 'Герой Нашего Времени' },
    { author: 'Пушкин', title: 'Руслан и Людмила' },
    { author: 'Лермонтов', title: 'И скучно, и грустно' },
];

let searchAuthor = (arr, secondName) => {
    let newBooks = [];
    for (let book of books) {
        if (book.author === secondName) newBooks.push(book);
    }
    return newBooks;
}
console.log(searchAuthor(books, "Лермонтов"));

//Задача 4
//Отсортировать массив books по значению свойства title вложенных объектов.

function compare(a, b) {
    return [b].title - [a].title;
}

books.sort(compare);
console.log(books);