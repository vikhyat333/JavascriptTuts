class Customer1{

    firstName: string;
    lastName : string;

    constructor (theFirstname : string,theLastName:string){
        this.firstName = theFirstname;
        this.lastName = theLastName;
    }

}

let myCustomer = new Customer1('martin','dawoor');

//myCustomer.firstName = 'raju';
//myCustomer.lastName = 'bhaio';

console.log(myCustomer.firstName + myCustomer.lastName);