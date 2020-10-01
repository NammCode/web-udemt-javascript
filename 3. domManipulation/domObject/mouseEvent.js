const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);

// Double Click
clearBtn.addEventListener('dblclick', runEvent);

// Mouse Move
card.addEventListener('mousemove', displayLocation);

// Event Handler 
function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
}

function displayLocation(e) {
  heading.textContent = `Mouse X: ${e.offsetX} - Mouse Y: ${e.offsetY}`;
  document.body.style.background = `#${e.offsetX}${e.offsetY}`;
}


