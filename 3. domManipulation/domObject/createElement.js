// Create Element & Insert to the DOM

// create element
const li = document.createElement('li');

// add class
li.className = 'collection-item';

// add id
li.id = 'test';

// add attribute
li.setAttribute('style', 'color: red');

// create text node and append (append child mean append inside something)
li.appendChild(document.createTextNode('New Task'));

// Create A 
const a = document.createElement('a');
a.className = 'delete-item secondary-content';
a.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(a);

// append lis as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);




