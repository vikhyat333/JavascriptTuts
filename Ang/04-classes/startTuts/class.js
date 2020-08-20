var customer = /** @class */ (function () {
    function customer() {
    }
    return customer;
}());
// now create a new instance or lets use it 
var myCustomer = new customer();
// we just created an instance called new customer from customer class // lets use it 
myCustomer.firstName = 'raju';
myCustomer.lastName = 'bhai';
// now display it
console.log(myCustomer.firstName + " " + myCustomer.lastName);
var storePpl = /** @class */ (function () {
    function storePpl(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return storePpl;
}());
// use it 
var myStoreppl = new storePpl('martin', 'bhaii');
console.log(myStoreppl.firstName);
console.log(myStoreppl.lastName);
