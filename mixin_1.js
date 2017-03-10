"use strict";

let utils = {
    getAddressLabel: function () {
        return this.name + "\n" + this.address;
    }
};

let personProto = {
    name: "Unknown",
    address: "Unset",
    siblings: []
};

let p1 = Object.create(personProto);

let businessProto = {
    name: "Unknown",
    address: "Unset",
    products: [],
};

Object.assign(personProto, utils);
Object.assign(businessProto, utils);

let b1 = Object.create(businessProto);
console.log("p1 address label:\n"+ p1.getAddressLabel());
console.log("b1 address label:\n"+ b1.getAddressLabel());