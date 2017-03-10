"use strict;"
function f1() {
  // This is global scope
  console.log(this);
}

// f1();
// This doesn't implicitly mean the objct that was invoked. Sometimes it is the global scope
// Functions get "This" from outside the function, but it doesn't necesarily have to come from the object instance calling it, like s.call()
let t1 = {

};

t1.prototype = {
  name: "name of function",
  toString: function () {
    return `my name is ${this.name}`;
  },
  jon: function () {
    return "Ok";
  },
  sayHello: function () {
    console.log(`Hello my name is ${this.name}`);
  }
}


// t1.f2 = f1;

// Now invoked as a member fucntion "this" takes the scope of t1
// This comes from the invocation, not from where it's declared
// t1.f2();

t1.jon();

// t1.sayHello();
// let t2 = {
//   name: "Albert"
// };
//
// t2.shout = t1.sayHello;
//
// t2.shout();
