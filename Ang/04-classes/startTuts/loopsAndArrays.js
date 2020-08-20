var reviews = [0, 2, 1, 3, 45, 66];
var total = 0;
for (var index = 0; index < reviews.length; index++) {
    var element = reviews[index];
    console.log(element);
    total += total + element;
    console.log("" + total);
}
var avg = total / reviews.length;
console.log("Avg is " + avg);
//---------------------------------------------------------------------------------------------------------
var sports = ['cricket', 'pg', 'basketball'];
for (var i = 0; i < sports.length; i++) {
    //console.log(iteratorr);
    if (sports[i] == 'basketball') {
        console.log('My fav sports is ' + sports[i]);
    }
}
sports.push('golf');
console.log("But now it's " + sports);
