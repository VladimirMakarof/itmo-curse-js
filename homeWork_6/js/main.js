//1. Посмотреть методы строк: indexOf / lastIndexOf / slice



//2. Написать функцию, которая принимает на вход 2 строки и возвращает количество вхождений одной строки в другую.
//Например, слово "дом" встречается в строке "дом домик домой одомашненный" 4 раза.

let text = "дом домик домой одомашненный";
let key = "дом";

let cc = text.slice(4, 4 + key.length);
console.log(cc);

let checkKey = (text, key) => {
  let numb = 0;
  let partOfText = 0;
  for (let i = 0; i < text.length - key.length; i++) {
    partOfText = text.slice(i, i + key.length)
    if (partOfText.includes(key)) {
      numb++;
    }
  }
  return numb;
}

console.log(checkKey(text, key));


//3. Написать функцию, которая принимает на вход строку и возвращает true, если функция является полиндромом и false, если нет.
//Палиндром — это число, буквосочетание, слово или текст, которые одинаково читаются по буквам или по словам как слева направо, так и справа налево.
//Например, 202 - палиндром / fafaf - палиндром / а роза упала на лапу Азора - палиндром.

text = "а роза упала на лапу Азора";
let palindrome = function (text) {
  text = text.toLowerCase();
  text = text.split(" ");
  text = text.join("");
  text = text.split("");
  let textRev = [];
  for (let i = text.length - 1; i >= 0; i--) {
    textRev.unshift(text[i]);
  }
  text = text.join("");
  textRev = textRev.join("");
  console.log(text);
  console.log(textRev);
  return (text === textRev)
}

console.log(palindrome(text));