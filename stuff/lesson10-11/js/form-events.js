'use strict';

// document.forms - все формы в докменте 
let form = document.forms.lesson;
console.log(form);
// документ к элементам форммы по значению атребута name 
// form.element - все элементы формы 
// login значение атребута name нужного элемента формы 
let loginInput = form.elements.login;
console.log(loginInput);

console.log(loginInput.value);
loginInput.value = "qwerty";

let passwordInput = form.elements.pwd;
console.log(passwordInput);

let colorRadio = form.elements.color;
for(let radio of colorRadio){
	radio.addEventListener("focus", changeColor);
}
function changeColor(){
	form.elements.checkbox_fieldset.style.background = this.value;
}
//name ="lang[]"
let langCheckBoxes = form.elements["lang[]"];
for (let checkBox of langCheckBoxes){
	if(checkBox.checked) console.log(checkBox.value); // если выбранная кнопка то это true если нет то false
}

let select = form.elements.countries; 
for (let option of select){
	if (option.selected) console.log(option.value); 
}

// отправка формы 
form.addEventListener("submit", submitForm); // form срабатывает только у формы 
function submitForm(event){
// что бы отменить событие по умолчанию, мы обращаемся к объекту события и вызываем метод preventDefault
event.preventDefault();

console.log(loginInput.value);
console.log(passwordInput.value);
}