// Here we are creating a function defined in the global scope
"use strict;"
function globallyDefined() {
  // 'This' in this funciton is in global scope
  console.log(this);
}

// globallyDefined();
// When calling the above line we get the window or process, global parent
// This doesn't implicitly mean the object that was invoked. Sometimes it is the global scope

// Functions get "This" from outside the function, but it doesn't necesarily have to come from the object instance calling it, like s.call()

// Defining some other object
let newObject = {

};

// Adding to this object's prototype
newObject.prototype = {
  name: "name of function",
  toString: function () {
    return `my name is ${this.name}`;
  },
  ok: function () {
    return "Ok";
  },
  sayHello: function () {
    console.log(`Hello my name is ${this.name}`);
  }
}

// If we try to define a new field/behavior of the newObject that references a globally defined function, then the context of the function being referenced is newObject
newObject.memberDefined = globallyDefined;

// Now invoked as a member function "this" takes the scope of newObject
// "This" comes from the invocation, not from where it's declared
// newObject.globallyDefined();
// ^called above and newObjectwill be logged to the screen

newObject.ok();


// Sandbox
// newObject.sayHello();
// let newObject2 = {
//   name: "Albert"
// };
//
// newObject2.shout = t1.sayHello;
//
// t2.shout();
