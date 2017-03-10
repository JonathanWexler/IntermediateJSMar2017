// We would like to losesly connect asynchronous functions to one another, instead of nesting callback, asynchronous functions
//  Sequencing =
// Want to do x
// Want to do y
// Want to do z
// In order defined they will be executed in order
// The promise pipeline will ensure things get executed in order -> it doesnt execute the code itself but it confirgures the code to be executed in order
// Promises are datastructures to enable this pipeline

"use strict;"

// Promise construction
let p = Promise.resolve("input");
console.log("Promise initialized.");
p = p.then(x=>{
  console.log(`Got ${x}`);
  return `${x} and extra processing.`
})
console.log("Stage One initialized.");
p = p.then(x=>{
  console.log(`Got Next 2 ${x}`);
  return `${x} and extra processing 2.`
});
console.log(`STAGE TWO INITIALIZED`);




//  Each level in the promise pipeline returns a value to pass to the next level that calls on it
// Promise construction
let p = Promise.resolve("input");
console.log("Promise initialized.");
let r = p.then(x=>{
  console.log(`Got ${x}`);
  return `${x} and extra processing.`
})
console.log("Stage One initialized.");
let j = r.then(x=>{
  console.log(`Got Next 2 ${x}`);
  return `${x} and extra processing 2.`
});
console.log(`STAGE TWO INITIALIZED`);
// In this case j has the result of the first two levels, which the other variables still hold data that could be used to an entirely different direction


// or more conventionally pipe them together
let p = Promise.resolve("input")
  .then(x=>{
    console.log(`Got ${x}`);
    return `${x} and extra processing.`
  })
    .then(x=>{
      console.log(`Got Next 2 ${x}`);
      return `${x} and extra processing 2.`
    });



// or more conventionally pipe them together
let p = Promise.resolve("input")
  .then(x=>{
    console.log(`Got ${x}`);
    return `${x} and extra processing.`
  })
    .then(x=>{
      console.log(`Got s2 ${x}`);
      return `${x} s2 and extra processing.`
    })
      .then(x=>{
        console.log(`Got s3 ${x}`);
        return `${x} s3 and extra processing.`
      });
        .then(x=>{
          console.log(`Got s4 ${x} Complete`);
        });

// With this set up we can easily change order of promises without needing to know which comes before or after
