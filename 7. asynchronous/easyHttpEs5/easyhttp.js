// Build our library
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let http = this.http;
  this.http.onload = function(){
    if (http.status === 200) {
      callback(http.responseText);
    } else {
      callback('Error: ' + http.status);
    }
  }

  this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url,  data, callback){
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  this.http.onload = function(){
    callback(self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url,  data, callback){
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  this.http.onload = function(){
    callback(self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let http = this.http;
  this.http.onload = function(){
    if (http.status === 200) {
      callback("Delete Success");
    } else {
      callback('Error: ' + http.status);
    }
  }

  this.http.send();
}