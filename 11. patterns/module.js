// STANDARD MODULE PATTERN
const UICtrl = () => {
  // Declare private vars and function
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    //Declare public var and functions
    callChangeText: function() {
      changeText();
    }
  }
};

ui = UICtrl();
ui.callChangeText();

// REVEALING MODULE PATTERN
const ItemCtrl = () => {
  let data = [];

  add = (item) => {
    data.push(item);
    console.log('Item Added....');
  }

  get = (id) => {
    return data.find(item => {
      return item.id === id;
    })
  }

  return {
    add: add,
    get: get
  }
};

item = ItemCtrl();
item.add({ id: 1, name: 'John'});
item.add({ id: 2, name: 'sss'});
console.log(item.get(2));