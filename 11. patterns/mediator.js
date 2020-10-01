class User {
  constructor(name){
    this.name = name;
    this.chatroom = null;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }

}

class Chatroom {
  constructor() {
    this.users = {}; // list of users
  }

  register(user){
    this.users[user.name] = user;
    user.chatroom = this;
  }

  send(message, from, to){
    if(to) {
      // Single user message
      to.receive(message, from);
    } else {
      // Mass message
      for(const key in this.users) {
        if (this.users[key] !== from){
          this.users[key].receive(message, from);
        }
      }
    }
  }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatroom = new Chatroom();


chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

 
brad.send('Hello Jeff', jeff);
sara.send('Hello Brad, you are the best dev ever!', brad);
jeff.send('Hello Everyone!!!!');