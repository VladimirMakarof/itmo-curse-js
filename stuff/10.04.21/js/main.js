'use strict'

let ints = []; // создаем пустой массив 
console.log(ints);

let colors = ["blue", "red", "yellow", "pink"];
console.log(colors);

//разряженный массив 
let nums = [2, 78, , 90, , , -12];
console.log(nums);

// своства length 
console.log(colors.length);
console.log(nums.length);

// доступ к элементам массива 
colors = ["blue", "red", "yellow", "pink"];
colors[1] = "orange";
console.log(colors);
//если нужно прочитать 
let elem = colors[0];
console.log(elem);

console.log(colors[30]); //undefined
colors[47] = "black";
console.log(colors);//48
//colors.length = 900;
//console.log(colors.length);

// многомерный массив
nums = [
		[55, -991, 34, 0], //0
		[9, 23, 81], //1
		[99, 4] //2
		];
let firstArr = nums[1];
console.log(firstArr); //[9, 23, 81]
console.log(firstArr[2]); //81
console.log(nums[2][1], nums[1][1]); //4 23

//перебор массива 
ints = [67, 99, 12, 65, 6]; 
								//i++
for (let i = 0; i<ints.length; i += 1) {
	console.log(ints[i]);
}

let str = "Значение элемента: ";
for (let i = 0; i < ints.lenght; i +=1){
		//console.log(ints[i]);
		str += ints[i] + " ";
		ints[i] *= ints[1]; //этот цикл позволяет изменять значения массива 

}
console.log(str);
console.log(ints);

//цикл for of позволяет перебирать массивы и коллеции html элементов 
ints = [67, 99, 12, 65, 6]; 
for (let arrElem of ints){
	console.log(arrElem);
}

//
let sum = 0; //67 + 99 + 12 + 
for (let arrElem of ints){
	sum = sum + arrElem;
}
console.log(sum);

//

let pics = ["one.jpg", "two.jpg", "three.jpg", "four.jpg"];
let picsSection = document.getElementById("pics");
for (let pic of pics){
	//<img>
	let img = document.createElement("img");
	//<img src="img/" + pic>
	img.setAttribute("src", `img/${pic}`)
	picsSection.append(img);
}

// методы массивов
colors = ["blue", "red", "yellow", "pink"];
// 1. добавить/удаление  перевого/последнего элемента массива 

//удаление  
let lastColor = colors.pop(); //если нужен последний элемент, еслине нужен то пишем colors.pop(); 
console.log(lastColor);
colors.pop(); // blue" "red"
console.log(colors);

// добавление в конец массива 
colors.push("black", "green", "purple");
console.log(colors); //blue" "red" "black", "green", "purple"

//удаление первого элемента 
let firstElem = colors. shift();
console.log(firstElem); // blue"
colors.shift(); //["black", "green", "purple"]
console.log(colors); 

//добавление элементов в начало массива 
colors.unshift("green", "red"); // ["green", "red" "black", "green", "purple"]
console.log(colors); 

//splice/slice он создаёт новый массив на основе существующего, исходный массив не меняет 
colors = ["blue", "red", "yellow", "pink", "green"]; 
console.log(colors); 
//создаём новый массив 
let newColors = colors.slice(1, 3);
console.log(newColors); 
//["blue",  "pink", "green"]
let removed = colors.splice(1, 2, "greenyellow", "gold");
console.log(removed);  //["red", "yellow"] 
console.log(colors); // ["blue", "greenyellow", "gold", "pink", "green"]

//удаление  нечётных элементов массива 
ints = [-3, 78, 11, 11, 45, 90, 34];
for (let i = 0; i < ints.length; i+= 1){
	if(ints[1] % 2 !==0){
	ints.splice(i, 1);
	i -= 1;
}}
for(let i = ints.length - 1; i >= 0; i -= 1 ){
	if(ints[i] % 2 !== 0){
		ints.splice(i, 1);
	}
}
console.log(ints); //[78, 90, 34]


//join
//includes
//indexOf/ lastIndexOf
//reverse
//concat