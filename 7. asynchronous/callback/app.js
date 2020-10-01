const posts = [
  { id: 1, title: 'Post one' },
  { id: 2, title: 'Post two' }
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      const error = false;
      if (error) {
        reject('Something went wrong');
      } else {
        resolve();
      }
    }, 2000);
  });
}

function getPost() {
  setTimeout(function () {
    posts.forEach(function (post) {
      console.log(post.title);
    })
  }, 1000);
}

createPost({ id: 3, title: 'Post Three' })
.then(getPost)
.catch(function(err){
  console.log(err);
});
