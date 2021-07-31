class Book {
    _author = null;
    pageCount = 10;
    constructor(bookTitle, bookPrice) { // вызывается в момент создание объекта 
        if (bookTitle.length < 1) throw new Error('размер bookTitle не может быть меньше 1');
        if (bookTitle.length < 0) throw new Error('значение bookPrice не может быть меньше или равно 0');
        this._title = bookTitle; // this это ссылка на текущую объект 
        this._price = bookPrice;
    }
    //методы устанавливают значение свойств наываются сетторы
    set author(bookAuthor) {
        if (bookAuthor.length < 1) throw new Error('lenght не может быть меньше 1');
        this._author = bookAuthor;
    }
    // геттеры возращают значения свойств, геттеры не принимают на вход ни каких параметров 
    get author() {
        return this._author;
    }
}
// в сетторах перед тем как становить значения свойства предпологается сделать проверки входящих данных
// если начианется с нижнее подчёркивание это соглашение вне класса нельзя обращаться на приямую, значение данного свойства нужно устанвилвать через сеттер
// если перед свойством постаить # то к нему нельзя будет обратиться 
