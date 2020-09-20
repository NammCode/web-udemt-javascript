const number = [43,54,22,12,55,76,2];
const number2 = new Array(23,43,434,312);
let val;
console.log(number);

// const fruit = ['Apple', 23, true, undefined, null, {a:1, b:2}, new Date()];
// console.log(fruit);

// // Get array length
// val = fruit.length;

// // Check if is array
// val = Array.isArray(number);

// // Get single value
// val = number[4];
// val = fruit[2];

// // Insert into array
// number[2] = 100;

// // find index of value 
// val = number.indexOf(2);

// // MUTATING ARRAYS
// // Add on to end 
// number.push(23);
// // Add on to front
// number.unshift(40);
// // take off from end 
// number.pop();
// // take off from front
// number.shift();
// // splice valies
// number.splice(1, 2);
// // reverse 
// number.reverse();

// // Concatenate array
// val = number.concat(number2);

// Sorting array (But only sort first number)
val = number.sort();

// use the :compare function"
val = number.sort(function(x, y){
  return x - y;
});

// Reverse sort
val = number.sort(function(x, y){
  return y -x;
});

// find
function under50(num){
  return num < 50;
}

val = number.find(under50);
console.log(number);
console.log(val);