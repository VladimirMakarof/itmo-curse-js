'use strict'

/*function sqrt(x){
	return x * x;
}*/

//анонимные функции, можно вызывать только после объявления. Либо задаем переменной, либо передаются в качестве аргумента. 
let sqrt = function (x){
	return x * x;
};

let res = sqrt(4);
console.log(res);

// стрелочные функции, анонимные
sqrt = x => x * x; //если параметр один то можно скобки не ставить.  стрелка => в таком виде указывает нам что мы закончили указывать параметры и переходим к телу функции. 
// если в теле инструкции только 1 инструкция и функция должна вернуть какой-либо результат, то ни фигурные скобки и нет return
let doubled = x => x * 2; // return не явный 
let printTitle = (elem, text) => { // если появляются фигурные скобки то return нужно писать обязательно. 
	if (text.length < 3) return;
	elem.innerText = text.toUpperCase();
};
printTitle(document.body, "Функции");
// любую функцию можно передать как параметр в другую функцию. любая функция может быть передана в качестве аргумента в другую функцию. 
function changeNum(num, func){
	return func(num);
}

res = changeNum(12, sqrt); // сюда передаётся либо имя переменной в которой находиться переменная, либо анонимная функция целиком. 
res = changeNum(12, x => x + 10 );
res = changeNum(10, x => x - 10 );

function getNewArr(arr, func){
	let newArr = [];
	for (let elem of arr){
		newArr.push(func(elem));
	}
	return newArr;
}
let arr = [4, 9, 1, 0, -5];
let newArr = getNewArr(arr, sqrt); //[16, 81, 1, 0, 25]
getNewArr = getNewArr(arr, x => x + 100); //[104, 109, 101, 100, 95]

//метод массива 
//сортировка массива
let colors = ["red", "blue", "orange", "gold"];
colors.sort();
console.log(colors);//"blue" "gold" "orange" "red"

function compare(a, b){// 45 78 функция сравнения 2х элементов
	if (a < b) return -1;  //-1 (отрицательное число), если а < b по какому либо критерию 
	if (a < b) return -1; // 1 (положительное число), если а больше б
	return 0;
	//0, если а равно б
	return a - b; // b - a; 
}

let ints = [45, 78, 12, -90, 3335, 78, 7770, 0];
ints.sort(compare);//метод sort работает только со строками
ints.sort((a, b)=> b - a);
console.log(ints);

ints = [45, -78, 12, -90, -3335, 78, 7770, 0];
//filter  создаёт новый массив. принимает на вход функцию, которая должна вернуть либо true либо false
let lessZerro = num => num < 0;
let resArr = ints.filter(lessZerro); // inst.filter(num => num < 0);
resArr = ints.filter(num=> num % 2 === 0);

//map(); принимает на вход функцию и работает точно так же 
resArr = ints.map(n => n * 100);
console.log(resArr);

let inst = [45, -78, 12, -90, -3335, 78, 7770, 0];
//evert(); перебирает массив и каждый элемент массива передаёт в эту функцию, и как только функция вернёт false то функция прервётся.  
res = inst.every(n => 0);

//some(); возвращает true если хотя бы один элемент массива прошёл проверку переданной функцией. 
res = ints.some(n => n > 0);
console.log(res);
ints = [45, -78, 12, -90, -3335, 78, 7770, 0];
let func = (elem, index, arr) => {
	console.log(`Элемент массива = ${elem}`);
	console.log(`Индекс элемента массива = ${index}`);
	console.log(`Массив = ${arr}`);

	arr[index] *= 10;
}
inst.forEach(func); //ничего не создаёт но способен изменить существующий массив, и он используется вместо цикла for.

for (let i = 0; i < ints.length; i +=1){
	func(inst[i], i, ints);
}

let numsArr = [ 
	[3, 5, -1, 6, 0],
	[56, -9, 111, 6],
	[11, 86, -12],
];
//проверить, есть в массиве число 111
res = numsArr.some(elem => elem.some(num => num === 111));

let first = ["Апрель", "Май", "Октябрь", "Февраль"],
	second = ["Январь", "Декабрь", "Октябрь", "Июль", "Май",]
function getArr(arr1, arr2){
	//return arr1.filter(elem => arr2.indexOf(elem) >= 0);
	return arr1.filter(elem => arr2.includes(elem));
}
console.log(getArr(first, second));

//замыкание
function sub(x){
	let n = x;
	return function (m){
		return n * m;
	}
}

let subSix = sub(6);

res = subSix(10);
console.log(res);
res = subSix(5);
console.log(res);
