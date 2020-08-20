var Customer1 = /** @class */ (function () {
    function Customer1(theFirstname, theLastName) {
        this.firstName = theFirstname;
        this.lastName = theLastName;
    }
    return Customer1;
}());
var myCustomer = new Customer1('martin', 'dawoor');
//myCustomer.firstName = 'raju';
//myCustomer.lastName = 'bhaio';
console.log(myCustomer.firstName + myCustomer.lastName);
