document.addEventListener("DOMContentLoaded", function() {});
function getBooks() {
	return fetch('http://localhost:3000/books')
	.then (resp => resp.json())
	}

function createBookLI(bookObject) {
	const liElement = document.createElement('li');
	liElement.textContent = bookObject.title;
	liElement.addEventListener("click",showBookDetails)
	return liElement;
	}

function showBooksList(booksArray) {
	const LIContainer = document.getElementById('list');
	booksArray.forEach(bookObject => {
		const bookLI = createBookLI(bookObject);
		LIContainer.appendChild(bookLI);
		});
	};

function showBookDetails() {
	alert(event.target.innerText);
	}

getBooks().then(showBooksList);