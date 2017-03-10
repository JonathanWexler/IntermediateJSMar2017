"use strict";

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
    getAddressLabel: function () {
        return this.name + "\n" + this.address;
    }
};

personProto.getAddressLabel = businessProto.getAddressLabel; // "MIX-IN