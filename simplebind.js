"use strict";

let p = {
    name: "Fred"
};

let f = function() {
    console.log(this.name);
};

// creates a function, assigned to g, such that
// the new function calls f, with "this" set to p
let g = f.bind(p);

// kinda like:
//let g = function() {
//    p.f();
//};

g();

console.log("----------------------------------");

function add(a, b) {
    return a + b;
}
// calls this v with     v as "this and vvvv as arguments...
let addTwo = add.bind(undefined,        2);
// like:
//let addTwo = function(b) {
//    return add(2, b);
//};

console.log(addTwo(0));
console.log(addTwo(4));
console.log(addTwo(99));
console.log(addTwo(-2));
