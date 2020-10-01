let val; 

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li');

console.log(list);
console.log(listItem);

// Get child nodes 
val = list.childNodes;
val = list.childNodes[1];
val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;
console.log(val);

// Get children element nodes
val = list.children;
console.log(val);
val = list.children[3].children[0];
console.log(val);

// another way
console.log(list.firstChild);
console.log(list.firstElementChild);

// count child element
console.log(list.childElementCount)

// Get parent node
console.log(listItem.parentNode);
console.log(listItem.parentElement); //same
console.log(listItem.parentElement.parentElement); //ong noi

// Get next sibling
console.log(listItem.nextElementSibling);

// Get previous sibling
const lastList = document.querySelector('li:last-child');
console.log(lastList);
console.log(lastList.previousElementSibling);