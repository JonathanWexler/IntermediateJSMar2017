"use strict";

function delayedProcess(x){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if (Math.random() > 0.5) resolve("Success: " + x);
            reject(new Error("Broke " + x));
        }, 2000);
    });
}

Promise.resolve("input")
        .then(x => {
            if (Math.random() > 0.5) {
                return x + " extra 0";
            } else {
                throw new Error(x + " it broke!!")
            }
        })
        .then(x => x + " extra 1")
        .then(delayedProcess)
        .then(x => x + " extra 3", e => {
            if (Math.random() > 0.5) return "Recovered from " + e.message;
            throw new Error("Double failure " + e.message);
        })
        .then(x => x + " extra 4")
        .then(x => x + " extra 5")
        .then(x => {
                    console.log("final stage got " + x);
                },
                e => {
                    console.log("final stage got an error " + e.message);
                });
console.log("initialized");

