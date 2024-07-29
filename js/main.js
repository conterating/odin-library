const myLibrary = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 223,
    readStatus: "read",
  },
  {
    title: "Lord Of The Rings",
    author: "J.R.R. Tolkien",
    pages: 531,
    readStatus: "not read",
  },
  {
    title: "Percy Jackson",
    author: "Rick Riordan",
    pages: 377,
    readStatus: "read",
  },
  {
    title: "Keeper Of The Lost Cities",
    author: "Shannon Messenger",
    pages: 512,
    readStatus: "read",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    readStatus: "not read",
  },
  {
    title: "Ulysses",
    author: "James Joyce",
    pages: 732,
    readStatus: "not read",
  },
];

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

function displayBook() {
  for (let obj in myLibrary) {
    console.log(myLibrary[obj]);
  }
}

function createCard() {}

//addBookToLibrary();

displayBook();

console.log(myLibrary);
