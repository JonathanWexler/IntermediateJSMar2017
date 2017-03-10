"use strict";

let utils = {
  getAddress: function () {
    return `${this.name} ${this.address}`
  }
}

let personProto = {
  name: "Uknown",
  address: "UnSet",
  siblings: [],
  // getAddress: function () {
  //   return `${this.name} ${this.address}`
  // }
}

// let p1 = Object.create(personProto);

let businessProto = {
  name: "Uknown",
  address: "UnSet",
  products: [],
}

// personProto.getAddress = businessProto.getAddress; // Mix-In

// personProto

// Object.assign()
Object.assign(personProto, utils);
Object.assign(businessProto, utils);

let p1 = personProto;
p1.name = "Jon";
let g = Object.create(personProto);
g.name  = "Hello";

let b1 = Object.create(businessProto);
console.log(`P1: ${p1.getAddress()}`);
console.log(`b1: ${b1.getAddress()}`);
