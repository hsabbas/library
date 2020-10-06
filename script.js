let myLibrary = [];
const table = document.getElementById("library-table");

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(newBook) {
    addBookToTable(newBook);
    myLibrary.push(newBook);
}

function removeBookFromLibrary(index){
    myLibrary.splice(index, 1);
}

function addBookToTable(newBook){
    let row = table.insertRow(-1);
    row.insertCell(0).innerText = newBook.title;
    row.insertCell(1).innerText = newBook.author;
    row.insertCell(2).innerText = newBook.pages;
    row.insertCell(3).innerText = newBook.read;
    row.insertCell(4).appendChild(addRemoveButton());
}

function removeBookFromTable(index){
    table.deleteRow(index);
}

function addRemoveButton(){
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "remove-btn");
    button.innerText = "remove";
    button.addEventListener("click", remove);
    return button;
}

function remove(e){
    let index = e.target.parentElement.parentElement.rowIndex;
    removeBookFromTable(index);
    removeBookFromLibrary(index - 1);
}