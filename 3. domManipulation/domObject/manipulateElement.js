// How to Replace Elements
// create element
const newHeading = document.createElement('h2');
// create id
newHeading.id = 'task-title';
// new text node
newHeading.innerHTML = 'New '; // same way
newHeading.appendChild(document.createTextNode('Heading'));
// get the old heading
const oldHeading = document.getElementById('task-title');
// parent
const cardAction = document.querySelector('.card-action');
// replace
cardAction.replaceChild(newHeading, oldHeading);


// How to Remove Elements
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// Remove list item 
lis[0].remove();
// Remove child element
list.removeChild(lis[3]);


// How to work with class & attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
console.log(firstLi);
console.log(link);
// Classes
console.log(link.className);    
console.log(link.classList);
console.log(link.classList[0]);
link.classList.add('res');
link.classList.remove('delete-item');
console.log(link);
// Attribute
let val = link.getAttribute('href');
console.log(val);
link.setAttribute('href', 'http://google.com');
console.log(link.hasAttribute('href'));
link.removeAttribute('href');
console.log(link.hasAttribute('href'));
