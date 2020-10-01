const Singleton = () => {
  let instance;

  createInstance = () => {
    const object = new Object('Object instance!!!');
    return object;
  }

  return {
    getInstance: () => {
      if (!instance){
        instance = createInstance();
      } 
      return instance;
    }
  }
}

const single = Singleton();

const instanceA = single.getInstance();
console.log(instanceA);

const instanceB = single.getInstance();
console.log(instanceB);
console.log(instanceA === instanceB);