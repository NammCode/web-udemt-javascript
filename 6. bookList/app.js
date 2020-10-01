// Book Constructor 
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() { };

// Add book to list (UI prototype)
UI.prototype.addBook = function (book) {
  const list = document.getElementById('book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href='#' class='delete'>X</a></td>`;
  list.appendChild(row);
}

UI.prototype.clear = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

UI.prototype.showMessage = function (message, nameClass) {
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

UI.prototype.delete = function(target){
  if(target.className == 'delete'){
    const link = document.querySelector('.delete');
    link.parentElement.parentElement.remove();
  }
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);
  const ui = new UI();

  if (title == '' || author == '' || isbn == '') {
    ui.showMessage('Dm nhap dang hoang vao', 'error');
  } else {
    ui.addBook(book);
    ui.clear();
    ui.showMessage('yeah yeah duoc add roi nhe', 'success')
  }
  e.preventDefault();
})

document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.delete(e.target);
  ui.showMessage('Xoa thanh cong', 'success');
  e.preventDefault();
})