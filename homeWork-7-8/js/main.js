/* Задача 1
Написать функцию генерации карточек с информацией о животных

        function getCats() {
            return [
                {
                    "name": "Люся",
                    "age": "1 год",
                    "color": "трехцветная",
                    "additional_info": {"vaccinations": true, "passport": true}
                },
                {
                    "name": "Том",
                    "age": "3 месяца",
                    "color": "белый",
                    "additional_info": {"vaccinations": false, "passport": false}
                },
                {
                    "name": "Макс",
                    "age": 2,
                    "color": "серый",
                    "additional_info": {"vaccinations": false, "passport": true}
                },
                {
                    "name": "Василий",
                    "age": 3,
                    "color": "черный",
                    "additional_info": {"vaccinations": true, "passport": true}
                }
            ];
        }

В html вместо значений true / false выводить: Есть / Нет

Задача 2 К СУББОТЕ(24 апреля)
Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу.
Функция не должна быть привязаны к конкретным названиям свойств.
Заголовки ячеек - названия свойств.
    Например, для articles заголовками будут: id, title, text, author; для goods заголовками будут: title, price, count и тп.

Массивы для тестирования:
let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');
/* ======================================================== */
function buildTable(labels, objects, container) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    let theadTr = document.createElement('tr');
    for (let i = 0; i < labels.length; i++) {
        let theadTh = document.createElement('th');
        theadTh.innerHTML = labels[i];
        theadTr.appendChild(theadTh);
    }
    thead.appendChild(theadTr);
    table.appendChild(thead);

    for (j = 0; j < objects.length; j++) {
        let tbodyTr = document.createElement('tr');
        for (k = 0; k < labels.length; k++) {
            let tbodyTd = document.createElement('td');
            tbodyTd.innerHTML = objects[j][labels[k].toLowerCase()];
            tbodyTr.appendChild(tbodyTd);
        }
        tbody.appendChild(tbodyTr);
    }
    table.appendChild(tbody);

    container.appendChild(table);
}

let labels1 = ['ID', 'title', 'text', 'author'];
let objects1 = [
    { id: 1, title: "JS", text: "Статья про JS", author: "Александр" },
    { id: 2, title: "PHP", text: "Статья про PHP", author: "Виталий" },
    { id: 3, title: "Базы Данных", text: "Статья про Базы Данных", author: "Евгения" },
    { id: 4, title: "HTML", text: "Статья про HTML", author: "Виталий" }
];



let labels2 = ['title', 'price', 'count'];
let objects2 = [
    { title: "Пианино", price: 3000, count: 25 },
    { title: "Гитара", price: 1200, count: 40 },
    { title: "Барабаны", price: 2700, count: 12 },
    { title: "Флейта", price: 900, count: 50 },
    { title: "Арфа", price: 3400, count: 5 }
];

buildTable(labels1, objects1, document.getElementById('a'));
buildTable(labels2, objects2, document.getElementById('b'));

/*
Примеры вызова функции:
generateTable(articles); - генерация таблицы со статьями
generateTable(goods); - генерация таблицы с товарами


Задача 3
Написать функцию generateField(n) по генерации поля размером n x n.
Значение n не может быть меньше 3.
Для 3х ячеек поля (для выбора ячейки использовать random) добавить атрибут prise.
Значения атрибута prise - значения ключей объекта
let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
};
*/