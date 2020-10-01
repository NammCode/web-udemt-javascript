document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create
  const xhr = new XMLHttpRequest();
  console.log('Ini', xhr.readyState);

  // Open
  xhr.open('GET', 'data.txt', true);
  console.log('Open', xhr.readyState);

  // Error
  xhr.onerror = function() {
    console.log('Hong me no r');
  }

  // Load 
  xhr.onload = function() {
    console.log('Onload', xhr.readyState);
    if (this.status === 200) {
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // Send
  xhr.send();

  // Old Style
  xhr.onreadystatechange = function(){
    console.log('On Ready', xhr.readyState);
    if (this.status === 200 && this.readyState === 4) {
      //console.log(this.responseText);
    }
  }

  // Optional - Used for spinners/loaders
  xhr.onprogress = function() {
    console.log('On Progress', this.readyState);
  }
}

// HTTP Status
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready