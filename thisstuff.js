"use strict";
// functions get "this" from outside, but 
// "this" doesn't necessarily have to come from
// an object prefix like x.doStuff()...

function f1() {
    console.log(this); // this is "global" scope in simple invocation.
    console.log(this + "");
}

f1();

console.log("--------------------");

let t1 = {
    name: "This is t1 :) ",
    sayHello: function() {
        console.log("Hello, my name is " + this.name);
    },
    toString: function() {
        return "I'm t1, my name is " + this.name;
    }
};

t1.f2 = f1;

t1.f2();
console.log("--------------------");

t1.sayHello();

let t2 = {
    name: "Albert"
};

t2.shout = t1.sayHello;

t2.shout();

console.log("--------------------");
let f3 = t2.shout;
//f3(); // Doesn't work, because "this" in strict mode will be undefined
// (would have been global in non-strict)
// dereference undefined.name blows up...

console.log("--------------------");
function MakeOne() {
    console.log(this);
}

MakeOne();

let m = new MakeOne();

// instanceof tries to fake the "is an instance of this class" behavior
// found in Java. It actually says "was this initialized by this function"
// Probably suggestive of poor design to see this often (either that or
// might be software-entropy after too many changes!)
console.log("MakeOne instanceof MakeOne? " + (m instanceof MakeOne));