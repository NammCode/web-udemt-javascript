// Normal
const sayNormal = function() {
  console.log('Normal Flow');
}
sayNormal();

// Arrow Function
const sayArrow = () => {
  console.log('Arrow Function');
}
sayArrow();

// 1 line function does not need braces
const sayHello = () => console.log('1 line');
sayHello();

// return value
const sayHi = () => 'Return Value';
console.log(sayHi());

// Return object
const sayObject = () => ({msg: 'Hello', id: 2});
console.log(sayObject());

// Single Para does not need parenthesis
const sayPara = name => console.log(`Hello ${name}`);
sayPara('Brad');

// with more parameters
const sayFullname = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
sayFullname('Brad', 'Travesy');

// Normal map
const users = ['Nathan', 'John', 'William'];
const nameLegths = users.map(function(name){
  return name.length;
});
console.log(nameLegths);

// Arrow Function with Map
const userLengths = users.map((user) => {
  return user.length;
});
console.log(userLengths);

// Shortest Way
const lengths = users.map(name => name.length);
console.log(lengths);