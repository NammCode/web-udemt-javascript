const form = document.querySelector('form');
const task = document.getElementById('task');
const heading = document.querySelector('h5');
task.value = '';

// submit of form
form.addEventListener('submit', runEvent);
function runEvent(e){
  console.log(`Event Type: ${e.type}`);

  // Get input value 
  console.log(task.value);
  e.preventDefault();
}

// Key down
task.addEventListener('keyup', function(e){
  console.log(`Event Type: ${e.type}`);
  console.log(e.target.value);
  heading.innerText = e.target.value;
});



