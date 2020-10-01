// Destructuring Assignment
let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest);

// Object Destructuring
({ a, b } = { a:100, b:200, c:300, d:400, e:500 });
// Rest pattern
({ a, b, ...rest } = { a:100, b:200, c:300, d:400, e:500 });
console.log(rest);

// Array Destructuring
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;
console.log(person1);

// Parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let per1, per2, per3;
[per1, per2, per3] = getPeople();
console.log(per1);

// Object Destructuring
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Make'
}

// Old ES5
const name1 = person.name,
      age1 = person.age,
      city1 = person.city;

// New ES6 Destructuring
const { name, age, city } = person;
console.log(name); 