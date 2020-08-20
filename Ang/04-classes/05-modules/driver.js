"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// now lets use it
const custclass_1 = require("./custclass");
let myCustomer = new custclass_1.Customer('martin', 'dawoor');
//myCustomer._firstName = 'raju';
//myCustomer.lastName = 'bhaio';
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
