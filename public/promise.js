"use strict";

// Immediately Invoked Function Expression
// aka. "IIFE"
(function () {
    function promiseFromButton(button) {
        return new Promise(function(resolve) {
            button.addEventListener('click', function(){
                resolve("The button was clicked");
            });
        });
    }
    
    function waitAWhile(data) {
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("delayed processing: " + data);
            }, 2000);
        });
    }
    
    let button = document.getElementById("myButton");
    // get a promise from the button
    promiseFromButton(button)
    // .then wait a while
            .then(x=> x + " and intermediate processing")
            .then(waitAWhile)
    // .then wait more
    // .then print something
            .then(x => console.log("got " + x));

}());

