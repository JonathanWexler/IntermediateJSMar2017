"use strict";

// Immediately Invoked Function Expression
// aka. "IIFE"
(function () {
    let button = document.getElementById("myButton");
    let handler3 = function () {
        console.log("second timeout...");
    };
    
    let handler2 = function (next) {
        console.log("timeout expired");
        setTimeout(next, 4000);
    };

    let handler = function (next, e) {
        console.log("Button clicked, event:");
        console.log(e);
        setTimeout(next, 2000);
    };
    let h2 = handler2.bind(undefined, handler3);
    let h1 = handler.bind(undefined, h2);
    
    button.addEventListener('click', h1);
}());

//(function () {
//    let button = document.getElementById("myButton");
//    let handler3 = function () {
//        console.log("second timeout...");
//    };
//    
//    let handler2 = function () {
//        console.log("timeout expired");
//        setTimeout(handler3, 4000);
//    };
//
//    let handler = function (e) {
//        console.log("Button clicked...");
//        setTimeout(handler2, 2000);
//    };
//    button.addEventListener('click', handler);
//}());

