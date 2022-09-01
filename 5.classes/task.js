class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        }
        if (state > 100) {
            this._state = 100;
        }
        this._state = state;
    }

    get state() {
        return this._state;
    }

    fix() {
        this._state = this._state * 1.5;
        if (this._state > 100) {
            return this._state = 100;
        }
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "novel";
    }
}

class FantasticBook extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "fantastic";
    }
}

class DetectiveBook extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let findBook = this.books.find(item => item[type] === value);
        if (findBook) {
            return findBook;
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        let findBook = this.books.find(item => item.name === bookName)
        let index = this.books.indexOf(findBook);
        if (findBook) {
            this.books.splice(index, 1);
            return findBook;
        } else {
            return null;
        }
    }
}

//НЕ РАБОТАЕТ!!
class Student {
    constructor(name) {
        this.name = name;
        this.marks = [];
    }

    addMark(estimation, _subject) {
        let errorMessage = "Ошибка, оценка должна быть числом от 1 до 5";
        if (estimation > 0 && estimation <= 5) {
            this.marks.push({mark: estimation, subject: _subject})
        } else {
            return errorMessage;
        }
    }

    getAverageBySubject(searchSubject) {
        let errorMessage = "Несуществующий предмет";
        let find = this.marks.find(arg => arg.subject === searchSubject);
        if(find) {
            let arr = [];
            let arr2 = [];
            arr = this.marks.filter(item => item.subject === searchSubject);
            arr2 = arr.map(item => item.mark)

            return arr2.reduce((acc, item) => acc += item) / arr2.length;         
        } else {
            return errorMessage;
        }
    }

    getAverage() {
        let arr = this.marks.map(item => item.mark);
        return arr.reduce((acc, item) => acc += item) / arr.length;
    }
}