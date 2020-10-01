 // EVENT BUBBLING  

document.querySelector('.card-title').addEventListener('click', 
function(){
  console.log('title');
});

document.querySelector('.card-content').addEventListener('click', 
function(){
  console.log('content');
});

// EVENT DELGATION
// const deleteItem = document.querySelector('.delete-item');
// deleteItem.addEventListener('click', function(){
//   console.log('delete item');
// });

document.body.addEventListener('click', function(e){
  // if (e.target.className === 'fa fa-remove') {
  //   console.log('delete item');
  // }
  // if (e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  if (e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
})