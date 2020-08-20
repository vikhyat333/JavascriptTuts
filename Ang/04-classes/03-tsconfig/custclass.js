var Customer = /** @class */ (function () {
    function Customer(theFirstname, theLastName) {
        this._firstName = theFirstname;
        this._lastName = theLastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// now lets use it
var myCustomer = new Customer('martin', 'dawoor');
//myCustomer._firstName = 'raju';
//myCustomer.lastName = 'bhaio';
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
