var result1 = sum(23,11); // global
console.log('Result is ', result1);


function sum (x,y){
    var result = x + y;

    return result;
}

// var result = sum(23,11); // global
// console.log('Result is ', result);

// Function expression syntax

var sum2 = function(x,y)
    {
        var result = x + y;
    
        return result;
    }

console.log('Result of sum2',sum2(23,77)); 
// This type of function cannot be called befre decalration like the previous one 
