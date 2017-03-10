"use strict";

let p = Promise.resolve("input");
console.log("initialized");
let q = p.then(x => {
    console.log("Got " + x);
    return x + " extra processing";
});
console.log("stage one initialized");
let r = q.then(x => {
    console.log("stage two got " + x);
});
console.log("stage two initialized");

