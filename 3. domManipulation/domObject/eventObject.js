console.log(document.querySelector('.clear-tasks'));

// Function right now
// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e){
//   console.log('Can not Clear');
//   e.preventDefault();
// });

// Name Function
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  //console.log('Can not Clear');
  console.log(e.target);
  console.log(e.target.id)
  console.log(e.target.className);
  console.log(e.target.classList);
  console.log(e.type);
  console.log(e.timeStamp);
  console.log(e.clientX);
  console.log(e.clientY);
  console.log(e.offsetX);
  console.log(e.offsetY);
}
