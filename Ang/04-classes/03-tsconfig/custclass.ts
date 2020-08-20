class Customer{

    private _firstName: string;
    private _lastName: string;

    constructor (theFirstname : string,theLastName:string){
        this._firstName = theFirstname;
        this._lastName = theLastName;
    }


    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }
   
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    }
// now lets use it

let myCustomer = new Customer('martin','dawoor');

//myCustomer._firstName = 'raju';
//myCustomer.lastName = 'bhaio';
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);


