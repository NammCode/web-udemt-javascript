// Select more than one elements, return HTMLCollection

// getElementsByClassName
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);

// More specific
const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);

// getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);

// Convert HTMLCollection into Array
lis = Array.from(lis);
lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `Task ${index}`;
});
console.log(lis);

// querySelectorAll: return nodeList, don't need to convert
const liss = document.querySelectorAll('li');
console.log(liss);
liss.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `Task ${index}`;
});

// selector odd only
const lisOdd = document.querySelectorAll('li:nth-child(odd');
lisOdd.forEach(function(li){
  li.style.color = 'red';
});

