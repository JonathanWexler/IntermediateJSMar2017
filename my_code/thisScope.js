function MakeOne() {
  console.log(this);
}
function Test() {
  self: this
}

// MakeOne();
//
// new MakeOne();



// let works = {
//
// }
let t = new Test();
// console.log(t.self);

let Car = function () {
  this.name =  "Ford"
  this.self = this
}

console.log("First Time:");
let c = new Car();
console.log(c.this);
console.log(c.self);

console.log("Second Time:");

let c2 = new Car();
process.nextTick(function() {
  console.log(c2.this);
})

console.log("Third Time:");

let c3 = new Car();
setTimeout(function() {
  console.log(c3.this);
},1000);

console.log(c3.self);
