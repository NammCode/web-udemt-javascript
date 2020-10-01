// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set 
set1.add(100);
set1.add('A String');
set1.add({ name: 'John'});
set1.add(true);
set1.add(100);
console.log(set1);

// Alter way
const set2 = new Set([1, true, 'Love U']);
console.log(set2);

// Get count 
console.log(set1.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has({ name: 'John'})); // false because it's not primeti type

// Delete from the set
set1.delete(100);

// ITERATING THROUGH SETS

// For...of
for (let item of set1) {
  console.log(item);
}

// For Each loop
set1.forEach(value => {
  console.log(value);
})

// CONVERT SET TO ARRAY 
const setArray = Array.from(set1);
console.log(setArray)