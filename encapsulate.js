"use strict";

function makeThing() {
    let v1 = "unset";
    return {
        getX: function () {
            return v1;
        },
        setX: function (val) {
            console.log("you're setting " + val);
            if (val != undefined && val.length > 0) {
                v1 = val;
            } else {
                throw new Error("You can't do that");
            }
        }
    };
}

let t1 = makeThing();
console.log("t1.getX() is " + t1.getX());
t1.setX("hello");
console.log("t1.getX() is " + t1.getX());
try {
    t1.setX("");
} catch (err) {
    console.log("oops, that broke, message is " + err.message);
}

for (let k in t1) {
    console.log(k + " has " + t1[k]);
}
