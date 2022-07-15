let myLibrary = [
  
];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function addBookToLibrary() {
      return this.title + this.author + this.pages + this.read;
  };
}

let book1 = new Book("The Hobbit", "J.R.R Tolkien", 275, "read")
let book2 = new Book("Can't Hurt Me", "David Goggins", 364, "read")
let book3 = new Book("Mastery", "Robert Greene", 353, "read")

console.log(book1.info())
console.log(book2.info())
console.log(book3.info())

titleinput = document.getElementById('title')
authorinput = document.getElementById('author')
pagesinput = document.getElementById('pages')
readinput = document.getElementById('read')

const addedbooks = document.getElementById('addedbooks')


function addBookToLibrary() {
  // do stuff here
  var addrow = document.createElement('tr')
  addedbooks.appendChild(addrow)
  var addtitle = document.createElement('td')
  addtitle.textContent = titleinput.value
  addrow.appendChild(addtitle)
  var addauthor = document.createElement('td')
  addauthor.textContent = authorinput.value
  addrow.appendChild(addauthor)
  var addpages = document.createElement('td')
  addpages.textContent = pagesinput.value
  addrow.appendChild(addpages)
  var addread = document.createElement('td')

  

}