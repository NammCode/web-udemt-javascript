document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getApi);

function getText(){
  fetch('test.txt')
    .then(res => {
      console.log(res.text());
      console.log(res);
    })
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

function getJson(){
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(function(post){
        output += `
        <li>${post.body}</li>`;
      })
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log('Error: ' + err));
}

function getApi(){
  fetch('https://api.github.com/users')
  .then(res => res.json())
  .then(data => {
    let output = '';
    data.forEach(function(user){
      output += `
      <li>${user.login}</li>`;
    })
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}
