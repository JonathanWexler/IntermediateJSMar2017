"use strict";

Promise.resolve("input")
        .then(x => {
            console.log("s3 Got " + x);
            return x + " s3 extra processing";
        })
        .then(x => {
            console.log("Got " + x);
            return x + " extra processing";
        })
        .then(x => {
            console.log("S2 Got " + x);
            return x + " s2 extra processing";
        })
        .then(x => {
           console.log("final stage got " + x);
}       );
console.log("initialized");

