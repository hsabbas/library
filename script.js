let myLibrary = [];
const table = document.getElementById("library-table");
const newBookButton = document.getElementById("new-book-btn");
const formContainer = document.getElementById("form-container");
const addBookButton = document.getElementById("add-book");
const cancelButton = document.getElementById("cancel-btn");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

newBookButton.addEventListener("click", openForm);
addBookButton.addEventListener("click", addBook);
cancelButton.addEventListener("click", cancel);

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
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
    row.insertCell(3).appendChild(addReadCheckbox(newBook.read));
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

function addReadCheckbox(hasRead){
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = hasRead;
    checkbox.addEventListener("click", changeReadStatus);
    return checkbox;
}

function changeReadStatus(e){
    let index = e.target.parentElement.parentElement.rowIndex - 1;
    myLibrary[index].toggleRead();
}

function openForm(){
    formContainer.style.display = "block";
}

function addBook(){
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = readInput.checked;

    if(title !== '' && author !== '' && pages != ''){
        addBookToLibrary(new Book(title, author, pages, read));
        cancel();
    } else {
        alert("Please complete the form");
    }
}

function cancel(){
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
    formContainer.style.display = "none";
}

