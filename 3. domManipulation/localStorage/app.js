// Set local storage item
// localStorage.setItem('name', 'Nam Khanh');
// localStorage.setItem('age', '23');

// Set session storage item
// sessionStorage.setItem('name', 'Beth');

// Remove from storage
// localStorage.removeItem('name');

// get from storage 
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// clear local storage 
// localStorage.clear();
// console.log(localStorage.getItem('name'));

//localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
 console.log(task);
});