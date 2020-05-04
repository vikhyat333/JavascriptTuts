var global_x =1; //global variables
console.log('outside of functions global_x =',global_x);

var z = 5;

function foo()
{   var local_x = 2;
    var z = 6;
    console.log('inside foo, global_x=', global_x);
    console.log('inside foo, local_x=', local_x);

    function bar(){

    var local_bar_x = 3;    
    local_bar_y =4 ; //without var keyword its a global variable
    var z = 9;
    console.log('inside of bar globalx',global_x);
    console.log('inside bar, local_x=', local_x);
    console.log('inside bar, localbar_x=', local_bar_x);
    console.log('inside bar, localbar_y=', local_bar_y);
    console.log('inside bar,z=',z);

    }

    bar();
    //console.log('inside foo, localbar_x=', local_bar_x);

}

foo ();
console.log('outside all, localbar_y=', local_bar_y);


//console.log('oustide the foo function',local_x);

// the js runtime looks for the variable at the current scope/ function and then jumps to higher scope and
//calls it there
