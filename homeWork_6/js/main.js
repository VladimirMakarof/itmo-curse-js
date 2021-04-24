//1. Посмотреть методы строк: indexOf / lastIndexOf / slice

//2. Написать функцию, которая принимает на вход 2 строки и возвращает количество вхождений одной строки в другую.
//Например, слово "дом" встречается в строке "дом домик домой одомашненный" 4 раза.

function getOccurrenceCount(string, stringToSearch) {
    let count = 0
     let index = 0
     let foundedIndex = 0
     
     while (foundedIndex >= 0) {
       foundedIndex = string.indexOf(stringToSearch, index)
       if (foundedIndex >= 0) {
        count++
         index = foundedIndex + stringToSearch.length
       }
     }
     
     return count
   }
   
   let stringToSearch = 'дом'
   let string = 'дом домик домой одомашненный'
   
   console.log(
    getOccurrenceCount(string, stringToSearch)
   )

//3. Написать функцию, которая принимает на вход строку и возвращает true, если функция является полиндромом и false, если нет.
//Палиндром — это число, буквосочетание, слово или текст, которые одинаково читаются по буквам или по словам как слева направо, так и справа налево.
//Например, 202 - палиндром / fafaf - палиндром / а роза упала на лапу Азора - палиндром.

