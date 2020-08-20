let reviews : number[] = [0,2,1,3,45,66];
let total : number = 0;
for (let index = 0; index < reviews.length; index++) {
    const element = reviews[index];
    console.log(element);
    total += total + element;
    console.log(`${total}`)
}
let avg : number = total / reviews.length;
console.log(`Avg is ${avg}`);
//---------------------------------------------------------------------------------------------------------
let sports : string [] = ['cricket','pg','basketball'];
for (let i=0;i<sports.length;i++) {
    //console.log(iteratorr);

    if(sports[i] == 'basketball'){
        console.log('My fav sports is '+sports[i]);
        
    }
    //else here
    
}
sports.push('golf');
console.log(`But now it's ${sports}`);


