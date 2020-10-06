let myLibrary = [];
let numberOfBooks = 0;
const table = document.getElementById("library-table");

function book(title, author, pages, read = false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(newBook) {
    numberOfBooks += 1;
    addBookToTable(newBook);
    myLibrary.push(newBook);
}

function addBookToTable(newBook){
    let row = table.insertRow(numberOfBooks);
    let titleCell = row.insertCell(0);
    let authorCell = row.insertCell(1);
    let pagesCell = row.insertCell(2);
    let readCell = row.insertCell(3);
    titleCell.innerText = newBook.title;
    authorCell.innerText = newBook.author;
    pagesCell.innerText = newBook.pages;
    readCell.innerText = newBook.read;
}