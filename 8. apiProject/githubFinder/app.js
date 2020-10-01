const github = new Github;
const ui = new UI;

document.getElementById('searchUser').addEventListener('keyup', (e) => {
  const user = e.target.value;

  if (user !== '') {
    github.get(user)
      .then(user => {
        ui.displayUser(user.dataUser);
        ui.displayRepos(user.dataRepos);
      })
      .catch(err => console.log(err));
  } else {
    ui.clear();
  }
  
});