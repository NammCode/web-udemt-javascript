// Function Declaration
function greet (name) {
  return `Hello ${name}`;
}

console.log(greet('Nam'));

// Function Expression
const square = function(x = 3) {
  return x * x;
};

console.log(square(8));

// Immidiately invoable function expression - IIFEs
(function(name){
  console.log('Hello ' + name);
})('Nam');

// Property Method
const todo = {
  add: function(){
    console.log('Add to do..');
  },
  edit: function(id){
    console.log(`Edit to do ${id}`);
  }
}

todo.delete = function() {
  console.log('Delete todo...');
}

todo.add();
todo.edit(34);
todo.delete();