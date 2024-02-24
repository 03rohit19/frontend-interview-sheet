// How prototypal inheritance works : a _proto_ property is reference to another object , which is called object's prototype. When a property is accessed on an abject and if the property is not found and at that object then the javascript engine looks at the object's proto and its proto and so on util its finds the property or it reaches at the end of prototypal chain this behaviour simulates classical inheritance.
// factory function

function userFactory(name, score) {
  let obj = {};
  obj.name = name;
  obj.score = score;
  obj.increment = function () {
    obj.score++;
  };
  return obj;
}

const user1 = userFactory("rohit", 98);

//Another method
let userStore = {
  increment: function () {
    this.score++;
  },
  decrement: function () {
    this.score--;
  },
};

function userFactory(name, score) {
  let obj = Object.create(userStore);
  obj.name = name;
  obj.score = score;
  return obj;
}

const userA = userFactory("rohit", 26);
const userB = userFactory("rahul", 29);
console.log(userA);
console.log(userB);

// Cleaning the code

function UserFactory(name, score) {
  this.name = name;
  this.score = score;
}
UserFactory.prototype.increment = function () {
  this.score++;
};
UserFactory.prototype.decrement = function () {
  this.score--;
};

const userC = new UserFactory("ram", 30);

// classes : syntactic sugar for creating object
class user {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  decrement() {
    this.score--;
  }
}
