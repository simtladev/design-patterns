// EagerInitialization
class Singleton {
  static instance = new Singleton();

  constructor() {}

  static getInstance() {
    return this.instance;
  }

  test() {
    console.log("test");
  }
}

function client() {
  const dum1 = Singleton.getInstance();
  const dum2 = Singleton.getInstance();
  const dum3 = new Singleton();

  console.log(dum1 === dum2);
  console.log(dum1 === dum3);
}

client();
