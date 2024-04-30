const person = {
  username: "Maciej",
  showName: function () {
    console.log(this.username);
  },
};

// Testowanie metody showName()
person.showName();

const bookshelf = {
  authors: [],
  getAuthors: function () {
    return this.authors;
  },
  addAuthor: function (authorName) {
    this.authors.push(authorName);
  },
};

// Dodawanie autorów do półki na książki
bookshelf.addAuthor("Harlan Cobben");
bookshelf.addAuthor("J.R.R Tolkien");
bookshelf.addAuthor("Andrzej Sapkowski");

// Pobieranie listy autorów
const authorsList = bookshelf.getAuthors();
console.log(authorsList);