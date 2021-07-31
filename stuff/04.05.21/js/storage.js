class Storage {
    constructor(storageName, ...bookToStorage) {
        this._name = storageName;
        this._books = bookToStorage;
    }
    // есть возможность к хранилищу добавить книгу 
    addBook(book) {
        if (book instanceof Book) {
            this._books.push(book);
        } // оператор instanceof првоеряет принадлежность объекта указанному типу данных 

    }
}