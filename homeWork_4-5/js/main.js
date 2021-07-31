'use strict'
/*console.log() вместо return использовать нельзя!

1. Напишите функцию, которая в зависимости от переданного в
нее целочисленного аргумента count, будет возвращать слово "товар"
в правильной форме ("12 товаров", но "22 товара", "1 товар", "97 товаров" и тд).
*/
function getCountStr(count) {
        if (typeof count === 'number' && count > 0) {
                return count + " " + helperForGetCountStr(count % 100);
        }
        return "";
}
function helperForGetCountStr(q) {
        switch (q) {
                case 1:
                        return `товар`;
                case 2: case 3: case 4:
                        return `товара`;
                case 5: case 6: case 7:
                case 8: case 9: case 11:
                case 12: case 13: case 14:
                case 0:
                        return `товаров`;
                default:
                        return helperForGetCountStr(q % 10);
        }
}
/*
2. Функция range
Напишите функцию range, принимающую три аргумента (start, end, step=1):
два обязательных: начало и конец диапазона,
третий аргумент - необязательный (если он не передан, то равен единице)
– шаг для построения массива.

Функция возвращает массив, который содержит все числа из диапазона, включая начальное и конечное.
Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]
*/
function range(start, end, step = 1) {
        // Можно ввести проверки на step > 0 && start>end
        let ret = [];
        for (var i = start; i <= end; i += step) {
                ret.push(i);
        }
        return ret;
}
/*
3. Написать функцию проверки на спам checkSpam(text, ...words)
Функция принимает на вход текст и ...спам - слова
(переменное количество аргументов).
Определить по 5ти бальной шкале, как часто в тексте встречается спам.
Результат вернуть из функции.

*/
let text = "Lorem error ipsum dolor sit amet consectetur adipisicing elit Aut corporis dolor delectus ducimus dolor error iusto laudantium officia"
        + "officiis vero error voluptatibus Aliquam ea ipsa quasi dolor sapiente error ullam A dolore dolorum minima provident error  voluptas Aliquam"
        + "aut fugiat hic inventore error nam provident ratione sed";
const max = 5;
checkSpam(text, "error", "dolor");

function checkSpam(text, ...spam) {
        if (!spam) {
                return max;
        } else {
                let textArr = text.split(" ");

                let countSpam = 0;
                for (let el of textArr) {
                        if (spam.includes(el)) countSpam++;
                }
                let countWords = textArr.length;
                let x = countSpam * 100 / countWords;
                return max - max * x / 100;
        }
}

//4. На методы массивов (functions-2)

//      Дан массив:
let numsArr = [
        [3, 5, -1, 6, 0],
        [56, -9, 111, 6],
        [11, 86, -12],
];

//    1. Увеличить каждый элемент массива на 10
numsArr.forEach((el1, in1, ar) => { ar.forEach((elem, index, arr) => { arr[in1][index] += 10 }) });
//  2. Создать массив, в который войдут положительные элементы numsArr
let posArray = [];//numsArr.filter(arr =>{arr.filter(elem => elem>0)});
for (var el of numsArr) {
        posArray = posArray.concat(el.filter(elem => elem > 0));
}