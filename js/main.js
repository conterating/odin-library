const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.readStatus}`;
  };
}

function addBookToLibrary() {
  let userBook = new Book();
  const bookInfo = prompt(
    "Enter book information: (title), (author), (pages), (readStatus)"
  );

  [userBook.title, userBook.author, userBook.pages, userBook.readStatus] =
    bookInfo.split(", ");

  myLibrary.push(userBook);
}

//addBookToLibrary();

//console.log(myLibrary);
