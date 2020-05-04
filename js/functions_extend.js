function foo(x,y,z){
    console.log('foo was called');
    console.log(x,y,z);
    console.log( arguments );
    console.log(arguments[3]);
    console.log(arguments.length);
    

}
//arguments is used when extra is passed than declared

foo('hello','gay','hi','sam');  // even if foo does not take any argunent the function actually gets called and is passed
