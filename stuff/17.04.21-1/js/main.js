'use strict'
//написать функцию, которая принимает на вход переменное количество агргументов (слов), создаёт и возращает массив, состоящий из уникальных слов. 
function getUniqueWords(...words){
	let uniqueWordsArr = [];
	for(let word of words){
		if(!uniqueWordsArr.includes(word)){
			uniqueWordsArr.push(word);
		}
	}
	return uniqueWordsArr;
}
console.log(getUniqueWords('one', 'two', 'one'));

//написать функцию, которая принимает на вход предложение и возращает самое длинное слово в предложении
let getLongestWord = sentens =>{
	let currentLongrstWord = '';
	let sentenceArr = sentence.split(' ');
	for(let word of sentenceArr){
		if(word.length > currentLongrstWord.length){
			currentLongrstWord = word;
		}
	}
	return `${currentLongrstWord} (${currentLongrstWord.length}letters)`;
}
let sentence = "A fast brown fox jumped over a lazy dog";
console.log(getLongestWord(sentence));

/*Написать функцию проверки на спам checkSpam(text, ...words)
Функция принимает на вход текст и ...спам - слова
(переменное количество аргументов).
Определить по 5ти бальной шкале, как часто в тексте встречается спам.
Результат вернуть из функции.

checkSpam(text, "error", "dolor");*/

let text = 'Lorem error ipsum dolor sit amet consectetur adipisicing elit Aut corporis dolor delectus ducimus dolor error iusto laudantium officiaofficiis vero error voluptatibus Aliquam ea ipsa quasi dolor sapiente error ullam A dolore dolorum minima provident error  voluptas Aliquamaut fugiat hic inventore error nam provident ratione sed';
let checkSpam = (text, ...spamWords)=>{
	let frequency = [];
	frequency.length = spamWords.length;
	let wordsArr = text.split(' ');
	for(let spamWordsIndex = 0; spamWordsIndex < spamWords.length; spamWordsIndex++){
		for(let textWords of wordsArr){
			if (textWords === spamWords[spamWordsIndex]){
				if (frequency[spamWordsIndex]){
					frequency[spamWordsIndex]++;
				} else {
					frequency[spamWordsIndex] = 1;
				}
			}
		}
	}
	return frequency;
}
console.log(checkSpam(text, 'error','dolor'));