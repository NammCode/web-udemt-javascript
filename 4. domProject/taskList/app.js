// Define UI element
const form = document.getElementById('task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const task = document.getElementById('task');
const filter = document.getElementById('filter');

loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getTask);
  form.addEventListener('submit', addTask);
  document.body.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearAllTasks);
  filter.addEventListener('keyup', filterTasks);
}

function getTask() {
  let tasks;
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(function (item) {
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.appendChild(document.createTextNode(item));

      const link = document.createElement('a');
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fas fa-remove"></i>';

      li.appendChild(link);
      taskList.appendChild(li);
    })
  }
}

function addTask(e) {
  if (task.value == '') {
    alert('Dien vao khong tao dam day >.<');
  } else {
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fas fa-remove"></i>';

    li.appendChild(link);
    taskList.appendChild(li);
  }
  storeTaskInLocalStorage(task.value);
  task.value = '';
  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.className === 'delete-item secondary-content') {
    e.target.parentElement.parentElement.remove();
    removeTaskFromLocalStorage(e.target.parentElement.parentElement.firstChild.textContent);
  }
}

function clearAllTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  clearTasksFromLocalStorage();
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent.toLowerCase();
    if (item.indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function (item, index) {
    if (item == task) {
      tasks.splice(index, 1);
    } else {
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasksFromLocalStorage() {
  localStorage.clear();
}