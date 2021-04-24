'use strict'
/*1. На многомерный массив
Дан массив:
[
[23, 56, 75, -90, 123],
[17, 0, -6429, -122],
[19, 86, 55, -3, 900, 0, 0],
[4, 9, -2]
]
Увеличить значение каждого элемента массива на 10*/
/*let arr =   [[23, 56, 75, -90, 123],
			[17, 0, -6429, -122],
			[19, 86, 55, -3, 900, 0, 0],
			[4, 9, -2]]

for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j< arr[i].length; j++){
		arr[i][j] += 10;
	}

}
console.log(arr)*/

/*2. Создать массив из целых чисел, заполнить массив рандомными значениями. Размер массива - 7.
Поменять элементы с максимальным и минимальным значениями местами.*/

nums = [34, 78, 10, -90, 1, 0, -5];
let min = Number.MAX_VALUE; 
let max = Number.MIN_VALUE; 

for (let i = 0; i < nums.length; i += 1){
	if (nums[i] < min) min = nums[i];
	if (nums[i] > max) max = nums[i];
}


/*3. Создать массив из целых чисел.
Отрицательные элементы массива скопировать в новый массив.*/

/*let arr = [1, -2, 3, -4, 5];
let arrNum=[];
for(let i = 0; i < arr.length; i++){
	if (arr[i]<0) {
		let removed = arr.splice(i, 1);
		arrNum.unshift(removed);
	}
	
}
		console.log(arr);
		console.log(arrNum);*/


/*============================================
let arr = [
			]
for (let i = 0; i < arr.length; i++){
	for (let j = 0; j< arr[i].length; j++){
		arr[i][j] +=10;
	}
}


let num  = [34, 89, -12, 90, -1, 0, -823, 56];
let newNums = [];
for (let i - nums.length -1; i >=0; i -= 1){
	if (nums[i] < 0) newNums.push(nums[i]);
}*/