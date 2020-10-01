const http = new easyHTTP;

// http.get('https://jsonplaceholder.typicode.com/posts', function(posts){
//   console.log(posts);
// });

data = {
  title: "What sap what sap",
  body: "This is very very long body"
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(post){
//   console.log(post);
// });

// http.put('https://jsonplaceholder.typicode.com/posts/3', data, function(post){
//   console.log(post);
// });

http.delete('https://jsonplaceholder.typicode.com/posts/3', function(post){
  console.log(post);
});