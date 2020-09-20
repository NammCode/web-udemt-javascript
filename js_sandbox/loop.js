// For Loop
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('Two');
    continue;
  }
  if (i === 5) {
    console.log('break');
    break;
  }
  console.log(i);
}

// Loop Through Array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// FOR LOOP
for(let i =0; i < cars.length; i++){
  console.log(cars[i]);
}

// FOR EACH
cars.forEach(function(car){
  console.log(car);
});

// MAP  
const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'}
];

const ids = users.map(function(user){
  return user.id;
});

// FOR LOOP IN PROJECT
const user = {
  firstName: 'Nam',
  lastName: 'Doe',
  age: 30
}

for (let x in user){
  console.log(`${x}: ${user[x]}`);
}