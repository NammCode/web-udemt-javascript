let val;

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 23,
  email: 'namkhanh@gmail.com',
  hobbies: ['programming', 'reading', 'chat', 'cat'],
  address: {
    city: 'Calgary',
    state: 'Alberta'
  },
  getBirthYear: function(){
    return 2020 - this.age;
  }
}

val = person;
console.log(val);

// Get specific value
val = person.firstName;
console.log(val);

val = person.hobbies[0];
console.log(val);

val = person.address.state;
console.log(val);

val = person.getBirthYear();
console.log(val);

const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nam', age: 22}
];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}