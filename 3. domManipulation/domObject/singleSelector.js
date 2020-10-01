// GetELementById
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

// Change styling
const taskTitle = document.getElementById('task-title');
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
//document.getElementById('task-title').style.display = 'none';

// Change content
document.getElementById('task-title').textContent = 'Tasks List';
document.getElementById('task-title').innerText = 'Inner List';
document.getElementById('task-title').innerHTML = '<span>Task List</span>';

// Query Selector: More powerful
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'blue';








