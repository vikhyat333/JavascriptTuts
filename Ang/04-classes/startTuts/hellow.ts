console.log('yooo');
console.log('coding gurus ' + 'time for some!');

let found : boolean = true;
let grade : number = 90;
let firstName : string = 'raju';
let lastName : string = 'bhai';

found = false;
grade = 0   // will not allow to change data type since its decalred already above = typeMismatch

// compiler finds error at compilation time and not on runtime 

let mydata: any = 'rajuu';

mydata = 0;
//typesafety is gone bc u used any - generic 'list,array etc useful 
console.log(found);
console.log('the grade is' +grade);
console.log('hi ' +firstName + " " +lastName +'you got ' +grade+' marks');
//template strings instead of using + again and again
console.log(`hi ${firstName} ${lastName} you got  ${grade} marks in sem 1`);