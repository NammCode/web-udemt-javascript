class Github {
  constructor(){
    this.clientId = 'e6ac334710a9a0f13ec8';
    this.clientSecret = 'a4c26e89b1210fc8dde917dd102535050df1bf24';
    this.repo_count = 5;
    this.repo_type = 'created: asc';
  }

  async get(user) {
    const resUser = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}?client_secret=${this.clientSecret}`);

    const resRepo = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_type}?client_id=${this.clientId}?client_secret=${this.clientSecret}`);

    const dataUser = await resUser.json();
    const dataRepos = await resRepo.json();
    
    return {
      dataUser,
      dataRepos
    }
  }

}