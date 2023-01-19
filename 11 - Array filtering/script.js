/*
var niz = [1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 6, 7, 8, 8, 9];
var filtriraniNiz = [];

for (var i = 0; i <= niz.length - 1; i++) {
    if (!filtriraniNiz.includes(niz[i])) {
    filtriraniNiz.push(niz[i]);
    }
}
console.log(filtriraniNiz);
*/

var niz = [1,2,2,3,4,4,5,6,7,8,8,9];
var rezultat = [];

for (var i = 0; i <= niz.length -1; i++) {
    var broj = niz[i];
    if (!rezultat.includes(broj)) {
    rezultat.push(broj);
    }
}
console.log(rezultat);

for (var i = 0; i < rezultat.length -1; i++) {
    for (var j = i + 1; j <= rezultat.length -1; j++) {
        if (rezultat[j] > rezultat[i]) {
            var pom = rezultat[i];
            rezultat[i] = rezultat[j];
            rezultat[j] = pom;
        }
    }
}
console.log(rezultat);

var max;
max = rezultat[0];
for (var i = 0; i <= rezultat.length - 1; i++) {
    if (rezultat[i] > max) {
    max = rezultat[i];
    }
}
console.log(max, "max");

var min;
min = rezultat[0];
for (var i = 0; i <= rezultat.length - 1; i++) {
    if (rezultat[i] < min) {
    min = rezultat[i];
    }
}
console.log(min, "min");
