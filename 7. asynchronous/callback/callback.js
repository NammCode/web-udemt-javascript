const posts = [
  {id: 1, title: 'Post one'},
  {id: 2, title: 'Post two'}
];

function createPost(post, callback){
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}

function getPost(){
  setTimeout(function(){
    posts.forEach(function(post){
      console.log(post.title);
    })
  }, 1000);
}

createPost({id: 3, title: 'Post Three'}, getPost);
