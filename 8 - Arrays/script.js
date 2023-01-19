//var niz = [3, 5, 9, 2, 8, 11, 72];
//index nekog elemeta 0,1,2,3,4,5,6,7

//console.log(niz[2]);
//console.log(niz.length);
//var nizLength = niz.length;
//console.log(niz[nizLength -1]); //poslednji element niza

/*
var niz = [];
var ime = NekoIme;
console.log(ime.lenght);
*/

//ARRAY METHODS
/*
var arr = [];

arr.push(1);
arr.push(0);
=> [1,0]

arr.unshift(2);
=> [2,1,0]

arr.pop();
=> [2,1]

arr.shift();
=> [1]

console.log(arr);
*/
///////////////////////////////////////////////////////////////////

/*
Napraviti program koji ce nam omoguiti da unosimo brojeve u niz
i zatim pritiskom na dugme "Do FizzBuzz" ispisati koliko elemenata
tog niza je fizz, koliko buzz a koliko fizzbuzz
fizz - deljiv sa 3
buzz - deljiv sa 5
fizzbuzz - deljiv sa i 3 i sa 5
*/

var arr = [];
function pushNumber() {
    var num = +document.getElementById("number").value;
    arr.push(num);

    document.getElementById("number").value = "";
}

document.getElementById("plus").addEventListener("click", function() {
    var num = +document.getElementById("number").value;
    arr.push(num);

    document.getElementById("number").value = "";
    console.log(arr);
});
document.getElementById("number").addEventListener("keydown", function (event){
    if (event.key === "Enter") {
        pushNumber ();
    }
});

document.getElementById("calculate").addEventListener("click", function(){
    for (var i = 0; i <= arr.length -1; i++) {
        console.log(arr[i]);
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            console.log(arr[i], "fizzbuzz");
        } else if (arr[i] % 5 === 0) {
            console.log(arr[i], "buzz");
        } else if (arr[i] % 3 === 0) {
            console.log(arr[i], "fizz");
        }
    }
});

/*
Domaci za nekad: Napisati skriptu koja ce prvo u prazan niz 
upisati prvih 20 clanova Fibonacijevog niza i 
ispisati u konzoli koliko od tih brojeva je deljivo sa 3

var FibonacijevNiz = [0,1,1,2,3,5,8,13,21,34,55,89,
144,233,377,610,987,1597,2584,4181,6765,10946]

var pocetniNiz = [0,1]
var iPrviSabirak = 0
var iDrugiSabir = 1

for(var i=2; i < 22; i++) {
    var num = niz[iPrviSabirak] + niz[iDrugiSabirak];
    pocetniNiz.push(num);
    iPrviSabirak++
    iDrugiSabir++
}
*/
var niz = [0,1];
var indexPrvogSabirka = 0;
var indexDrugogSabirka = 1;

for (var i = 0; i < 20; i++) {
var sledeciClanNiza = niz[indexPrvogSabirka] + niz[indexDrugogSabirka];
niz.push(sledeciClanNiza);
indexPrvogSabirka++;
indexDrugogSabirka++;
console.log(niz);
}