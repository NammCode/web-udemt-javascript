const id = 100;

// EQUAL 
if (id == 100) {
  console.log(true);
} else {
  console.log(false);
}

// NOT EQUAL
if (id != 101) {
  console.log(true);
} else {
  console.log(false);
}

// EQUAL TO VALUE AND TYPE
if (id === 100) {
  console.log(true);
} else {
  console.log(false);
}

// NOT EQULA TO VALUE AND TYPE
if (id !== 100) {
  console.log(true);
} else {
  console.log(false);
}

console.clear();

//Type if undefined
if (typeof id !== undefined) {
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// WITHOUT BRACES
if (id === 100)
  console.log('Bang nhau');
else 
  console.log('Deo Bang nhau');

// SWITCH
const color = 'red';

switch(color) {
  case 'blue':
    console.log('Color is blue');
    break;
  case 'yellow':
    console.log('Color is yellow');
    break;
  default:
    console.log('No Color');
    break;
}

console.log('pop');