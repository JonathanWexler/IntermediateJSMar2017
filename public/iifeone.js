"use strict";

// Immediately Invoked Function Expression
// aka. "IIFE"
(function(){
    let button = document.getElementById("myButton");
    button.addEventListener('click', function(e) {
        console.log("Button clicked...");
    });
}());

