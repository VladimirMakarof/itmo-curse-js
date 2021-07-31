'use strict';

let titles = document.querySelectorAll(".article p:first-child");
// на коллекцию событие добавить нельзя, нужно перебирать и нужно вешать на каждое событие
for (let title of titles){
	console.log(title);
	// добавление обработчика события 
	title.addEventListener("click", openDescription);
}
function openDescription(){
	//this контекст вызова функции, и тот элемет на который повешен обработчик событий 
	console.log(this);
	// у стрелочных функций this нет 
	this.nextElementSibling.classList.toggle("open");
}
// data-* (data-price) что бы добавить какую либо информацию к html элементу 
// prise
// получение значений data атребута :
// елемент .dataset.price // dog

let getPresent = () => {
	return{
		dog: " собака ",
		book: " книга ",
		car: " машина"
	}
}
let presentContainer = document.getElementById("present_container");
presentContainer.addEventListener("click", showPresent);
// showPresent(obj) ( объект события ) 
function showPresent(event){
console.log(event);
let clickElem = event.target; // елемент, на котором произошло событие event.target;
console.log(event.target);
let presentValue = clickElem.dataset.prise;
console.log(presentValue);
if(presentValue !== undefined){ //dog 
	let prises = getPresent();
	//let prises = {
	//	dog: " собака ",
	//	book: " книга ",
	//	car: " машина"
	//}
//console.log(prises[presentValue]);
clickElem.innerText = prises[presentValue];
clickElem.classList.add("present");
// удаление обработчика события 
//presentContainer.addEventListener("click", showPresent)
// добавление обработчика событий
// document.getElementById("presentContainer")
this.removeEventListener("click", showPresent);
}

}