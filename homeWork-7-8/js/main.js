
'use strict';
// Задача 1
//Написать функцию генерации карточек с информацией о животных

function getCats() {
    return [
        {
            "name": "Люся",
            "age": "1 год",
            "color": "трехцветная",
            "additional_info": { "vaccinations": true, "passport": true }
        },
        {
            "name": "Том",
            "age": "3 месяца",
            "color": "белый",
            "additional_info": { "vaccinations": false, "passport": false }
        },
        {
            "name": "Макс",
            "age": 2,
            "color": "серый",
            "additional_info": { "vaccinations": false, "passport": true }
        },
        {
            "name": "Василий",
            "age": 3,
            "color": "черный",
            "additional_info": { "vaccinations": true, "passport": true }
        }
    ];
}

function getCatsCards(where, array) {
    let section = document.createElement('section');
    section.innerHTML = `<h1> Задача 1 </h1>`;
    let sectionDiv = document.createElement('section');
    sectionDiv.classList.add('task');
    section.append(sectionDiv);

    for (let elem of array) {
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `
         <h2>${elem.name}</h2>
         <p>${elem.age}</p>
         <p>${elem.color}</p>
        `;
        sectionDiv.append(cardDiv);

        let getInfo = (obj) => {
            for (let x in obj) {

                if (x == 'true') {
                    let newP = document.createElement('p');
                    newP.innerText = `${x}: есть`;
                    cardDiv.append(newP);
                } else {
                    let newP = document.createElement('p');
                    newP.innerText = `${x}: нет`;
                    cardDiv.append(newP);
                }

            }
        }
        getInfo(elem.additional_info);

        where.append(section);
    }
}

getCatsCards(document.body, getCats());


//В html вместо значений true / false выводить: Есть / Нет

//Задача 2 К СУББОТЕ(24 апреля)
//Написать функцию generateTable, которая принимает на вход массив объектов и создает таблицу.
//Функция не должна быть привязаны к конкретным названиям свойств.
//Заголовки ячеек - названия свойств.
//    Например, для articles заголовками будут: id, title, text, author; для goods заголовками будут: title, price, count и тп.

//Массивы для тестирования:
/* let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');

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
buildTable(labels2, objects2, document.getElementById('b'));*/


//         Массивы для тестирования:
let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

let goods = [
    {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    {
        title: "Флейта",
        price: 900,
        count: 50
    },
    {
        title: "Арфа",
        price: 3400,
        count: 5
    }
];

//         Примеры вызова функции:
//         generateTable(articles); - генерация таблицы со статьями
//         generateTable(goods); - генерация таблицы с товарами

function generateTable(arr) {
    let section = document.createElement('section');
    section.innerHTML = `<h1> Задача 2 </h1>`;
    // let title = document.createElement('h2');
    let table = document.createElement('table');
    let captionRow = document.createElement('tr');
    for (let propertyName in arr[0]) {
        let captionCell = document.createElement('th');
        captionCell.innerText = propertyName.toUpperCase();
        captionRow.append(captionCell);
    }
    table.append(captionRow);

    for (let element of arr) {
        let row = table.insertRow();
        for (let propertyName in element) {
            let cell = row.insertCell();
            cell.innerText = element[propertyName];
        }
    }
    return table;
}
document.body.append(
    generateTable(goods),
    generateTable(articles)
);

/*
Примеры вызова функции:
generateTable(articles); - генерация таблицы со статьями
generateTable(goods); - генерация таблицы с товарами


Задача 3
Написать функцию generateField(n) по генерации поля размером n x n.
Значение n не может быть меньше 3.
Для 3х ячеек поля (для выбора ячейки использовать random) добавить атрибут prise.
Значения атрибута prise - значения ключей объекта

*/

let prises = {
    headphones: "Наушники",
    book: "Книга",
    postcard: "Открытка"
};

function generateField(n, data) {
    n = n >= 3 ? n : 3; //если значение n больше 3 оставить n, в противном случае n = 3
    let field = document.createElement("div");
    field.style.cssText =
        "margin: 0 auto;" +
        "width: 40vw;" +
        "display: flex;" +
        "flex-wrap: wrap;";
    // n * n - общее количество ячеек внутри field
    for (let i = 0; i < n * n; i++) {
        let cell = document.createElement('div');
        cell.style.border = "1px solid black";
        cell.style.boxSizing = "border-box";
        cell.style.width = cell.style.height = (40 / n) + "vw";
        field.append(cell);
    }
    addRandomData(field, data);
    return field;
}
document.body.append(generateField(4, prises));

function addRandomData(field, dataObject) {
    // ["headphones","book","postcard"]
    let attrValues = Object.keys(dataObject);
    for (let attrValue of attrValues) {
        let randomIndex = Math.floor(Math.random() * field.children.length);
        field.children[randomIndex].setAttribute("prises", attrValues);
    }
}

// нам нужно выбрать рандомно ячейки по количеству призов
// каждой рандомной ячейки выбираем атрибут has атрибут