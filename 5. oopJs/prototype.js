function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getMarried = function(newLastName) {
  this.lastName = newLastName;
}

const nam = new Person('Nam', 'Khanh', '04-06-1997');
console.log(nam);
console.log(nam.calculateAge());
console.log(nam.getFullName());
nam.getMarried('Nguyen');
console.log(nam.getFullName());