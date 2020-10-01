class Storage {
  constructor(){
    this.city;
    this.state;
    this.defaultCity = 'london';
    this.defaultState = 'uk';
  }

  getLocal(){
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if(localStorage.getItem('state') === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem('state');
    }

    return {
      city: this.city,
      state: this.state
    }
  }

  setLocal(city, state){
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }

}