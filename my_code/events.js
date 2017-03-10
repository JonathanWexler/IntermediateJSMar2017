(function functionName() {
  button = document.getElementById('button');

  let handler = function () {
    console.log("Clicked");
    setTimeout(next, 2000);
  }
  button.addEventListener('click', handler)
}());


// Promises
