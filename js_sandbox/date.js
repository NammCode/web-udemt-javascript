let val;

const today = new Date();
let birthDay = new Date('9-10-1981 21:12:22');

val = today;
console.log(typeof val);
console.log(val);

val = birthDay;
console.log(val);

birthDay = new Date('September 10 1982');
console.log(birthDay);

// Get Month (Zero based)
val = today.getMonth();
console.log(val);

// Get Date
val = today.getDate();
console.log(val);

// Get Day (Monday is 1)
val = today.getDay();
console.log(val);

// Get time
val = today.getFullYear();
console.log(val);

// Get Hour
val = today.getHours();
console.log(val);
