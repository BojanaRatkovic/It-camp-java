/*
var arr = [1,2,3,4,5,6,450,-84]; // n, 100000
var indeksi = [];

for (var i = 0; i <= arr.length -2; i++) {
    for (var j = i + 1; j <= arr.length -1; j++) {
        if(arr[i] + arr[j] === 15) {
        indeksi.push(i);
        indeksi.push(j);
        break;
        }
    }
}
*/

/*
var arr = [1, 2, 3, 4, 5, 8, 2, -84]; // n, 100000
var parniBrojevi = [];

for (var i = 1; i < 100; i++) {
    if (i % 2 === 0) {
    parniBrojevi.push(i);
    }
    if (parniBrojevi.length === 5) {
    break;
    }
}
*/

// console.log(parniBrojevi);

var arr = [1,5,3,4,3,6,9,10,4,5];
var indeksi = [];
var k = 0;

for (var i = 0; i <= arr.length -2; i++) {
    for (var j = i + 1; j <= arr.length -1; j++) {
        if (arr[i] + arr[j] === 10) {
            k++;
            indeksi.push(i);
            indeksi.push(j);
            break;
        }
    }
    if (indeksi.length === 2) {
        break;
}
console.log(k);

/*
for (var i = 0; i < 100; i++) {
    if (i < 20) {
        console.log(i); 
    } else if {
        break;
    }
}
*/

// // // Isto // // //

/*
var i = 0;
while ( i < 100) {
    console.log(i);
    i++;
}

for(var i = 0; i < 100; i++) {
    console.log(i); 
}
*/

///////////////////////////////////////////////////////////////////

var text = "";

while (text.length < 100) {
    text = text + "nekaRec";
}
console.log(text);

///////////////////////////////////////////////////////////////////

var i = 1;
var fizzBuzzFound = false;

while(!fizzBuzzFound) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, 'fizzBuzz');
        fizzBuzzFound = true;  //ili break 
            // break; ---- i sa keywordom "break" se moze prekinuti while loop
} else {
    console.log(i);
}
i++;
}