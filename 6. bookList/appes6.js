class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBook(book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>`;
    list.appendChild(row);
  }
  
  clear() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
  
  showMessage(message, nameClass) {
    const div = document.createElement('div');
    const form = document.getElementById('book-form');
    const container = document.querySelector('.container');
    div.className = `alert ${nameClass}`;
    div.appendChild(document.createTextNode(message));
    container.insertBefore(div, form);
    setTimeout(function(){
      document.querySelector('.alert').remove()
    }, 2000);
  }
  
  delete = function(target){
    if(target.className == 'delete'){
      const link = document.querySelector('.delete');
      link.parentElement.parentElement.remove();
    }
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static displayBooks(){
    const books = Store.getBooks();
    books.forEach(function(book){
      const ui = new UI;
      ui.addBook(book);
    })
  }

  static addBook(book){
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbnDelete){
    const books = Store.getBooks();
    console.log(books);
    books.forEach(function(book, index){
      if(isbnDelete === book.isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

document.addEventListener('DOMContentLoaded', Store.displayBooks());

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);
  const ui = new UI;

  if (title == '' || author == '' || isbn == '') {
    ui.showMessage('Dm nhap dang hoang vao', 'error');
  } else {
    ui.addBook(book);
    Store.addBook(book);
    ui.clear();
    ui.showMessage('yeah yeah duoc add roi nhe', 'success')
  }
  e.preventDefault();
})

// Event delete book
document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.delete(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  ui.showMessage('Xoa thanh cong', 'success');
  e.preventDefault();
})