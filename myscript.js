let myLibrary = [

];

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
	this.info = function logBook() {
		return this.title + this.author + this.pages + this.read;
	};
}

let book1 = new Book("The Hobbit", "J.R.R Tolkien", 275, true)
myLibrary.push(book1)


console.log(book1.info())


titleinput = document.getElementById('title');
authorinput = document.getElementById('author');
pagesinput = document.getElementById('pages');
readinput = document.getElementById('read');

const addedbooks = document.getElementById('addedbooks');
let bookx;
let addrow;


function addBookToLibrary() {
	let bookx = new Book(titleinput.value, authorinput.value, pagesinput.value, readinput.checked)
	myLibrary.push(bookx)
	console.log(bookx)
	console.log(myLibrary)




	addrow = document.createElement('tr')
// this gives each row its own id
	let addid = document.getElementsByTagName('tr')
	while (i < addid.length) {
		addid = addid[i]
		addrow.setAttribute("class", "row_" + i);
		i++;
	}

	addedbooks.appendChild(addrow)

// This removes the row that the button that is being pressesd is in.
	let removerow2 = document.createElement('button')
  let removerow1 = document.createElement('td')
	removerow2.setAttribute('onclick', 'removebook(this)')
  removerow1.appendChild(removerow2)
	addrow.appendChild(removerow1)

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


	if (readinput.checked == true) {
		var addreadbtn = document.createElement('input')
		addreadbtn.setAttribute('type', 'checkbox')
		addreadbtn.checked = true
	} else {
		var addreadbtn = document.createElement('input')
		addreadbtn.checked = false
		addreadbtn.setAttribute('type', 'checkbox')
	}

addreadbtn.setAttribute('onclick', 'readornot(this)')

	addread.appendChild(addreadbtn)

	addrow.appendChild(addread)

	return


}

var tablerow = addedbooks.getElementsByTagName("tr");
let i = 0;
while (i < tablerow.length) {
	tablerow = tablerow[i]
	tablerow.setAttribute("class", "row_" + i);
	i++;
}
console.log(i)

// when the read or not button is pressed the object will change in myLibrary
function readornot(readclicked){
   var thisread = readclicked
  
   console.log(thisread)

   
}



// removes the book from the library when pressed 
function removebook(rowclicked) {
	var thisrow = rowclicked;
	thisrow.parentNode.parentNode.remove()

  myLibrary = myLibrary.filter(({title}) => !title.includes(titleinput.value))
  console.log(myLibrary)

}






