"use strict;"

let p = {
  name: "fred"
}

let f = function () {
  console.log(this.name);
}

// creates a new function assigned to g such that the new function calls f with "this" set to p
let g = f.bind(p);

// This is an object oriented style?

// let g1 = function () {
//   p.f();
// }


g();

console.log("------------------------");

function add(a,b) {
  return a+b;
}

// Freates a new function
let addTwo = add.bind(undefined, 2);
// With this bind, the first argument is this, and the next arguments are passed to the binded function
console.log(addTwo(0))
let addDefault = add.bind(undefined, 2,3);

console.log(`ADDING DEFAULT: ${addDefault(3,4)}`);
// same as:
// let addTwo = function (b) {
//   return add(2, b);
// }
// See Student threshold example
// Bind doesn't sold the general problems with and, or, not operators


// Trying with "This"

let withThis = function (a , b) {
  console.log(this);
}

let jon = withThis.bind("hello", 3);
console.log(`TRYING: ${g(jon)}`);
