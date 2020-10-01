// Person constructor 
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');
console.log(person1.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);
// Make customer prototype return Customer
Customer.prototype.constructor = Customer;

const nam = new Customer('Tom', 'Smith', '343223223', 'Standard');
console.log(nam);
console.log(nam.greeting());