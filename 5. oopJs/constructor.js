// Construction
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const nam = new Person('Nam', '04-06-1997');
console.log(nam);
console.log(nam.calculateAge());

// String
const name1 = 'Jeff';
const name2 = new String('Jeff');
console.log(name2);

// Number
const num1 = 5;
const num2 = new Number(5);

// Function
const getSum1 = function(x,y) {
  return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');
console.log(getSum2(1, 1));

// Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});

// Array
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);
console.log(arr2);

// Regular Expressions
const res1 = /\w+/;
const res2 = new RegExp('\\w+');