document.querySelector('.getJoke').addEventListener('click', loadJoke);

function loadJoke(e){
  const number = document.querySelector('input[type="number"]').value;
  const display = document.querySelector('.message');

  if (number === '') {
    display.style.display = 'block';
    display.innerHTML = 'Please Input Number of Jokes';
    display.style.color = 'red';
  } else {
    display.style.display = 'none';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  
    let output = '';
    const ul = document.querySelector('.jokes');

    xhr.onload = function(){
      const jokes = JSON.parse(xhr.responseText).value;
      jokes.forEach(function(joke){
        output +=
        `<li>ID: ${joke.id}</li>
        <li>Joke: ${joke.joke}</li>`;
      });
      ul.innerHTML = output;
    }
  
    xhr.send();
  }

  e.preventDefault();
}