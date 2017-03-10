// myPromiseExample.js


// Ensuring code from a database is synchronously executed in JS

let promise = Promise;
promise.resolve({name: "jon", age: 26, occupation: "developer"})
  .then(data => {
    setTimeout(()=>{
      console.log(data.name);
      data.name = "hello";
      setTimeout(function () {
        console.log(data.name);

      }, 500)
    },1000)
    data.ageInDays = data.age*365;
    return data;
  })
    .then(data=>{
      console.log(`${data.occupation} is the occupation`);
      console.log(data.name);
      // data.backwards = data.name.reverse();
      // console.log(data.backwards);
      return data;
    })
      .then(data => {
        // function reversePromise(s){
        //   return s.split("").reverse().join("");
        // }
        console.log(data);
        return data.length;
      });


function reverse(s){
    return s.split("").reverse().join("");
}
