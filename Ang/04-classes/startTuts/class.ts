// vlass encapsulates data and fuction of anyss
class customer{
    // props
    firstName: string;
    lastName: string;

}

// now create a new instance or lets use it 

let myCustomer = new customer();
// we just created an instance called new customer from customer class // lets use it 

myCustomer.firstName = 'raju';
myCustomer.lastName = 'bhai';

// now display it
console.log(myCustomer.firstName + " " + myCustomer.lastName);

class storePpl{
    // props
    firstName: string;
    lastName: string;

    constructor(theFirst:string,theLast:string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// use it 
let myStoreppl = new storePpl('martin','bhaii');
console.log(myStoreppl.firstName);
console.log(myStoreppl.lastName);



