/*
var niz = [3,4,6,2,5,7,8,9,1,1];
var zbir = 0;
for (i = 0; i <= niz.length -1; i++) {
    zbir = zbir + niz[i];
}
console.log(zbir);
*/

// Napisati program koji će svaki neparan broj u nizu kvadrirati,
// a svaki paran korenovati
/*
a^2 = a * a
Kvadratni koren
ako je 5*5 = 25
kvadratni koren od 25 je 5
*/

//var niz = [1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 6, 7, 8, 8, 9];

/*
for (var i = 0; i <= niz.length - 1; i++) {
    if (niz[i] % 2 === 0) {
    niz[i] = Math.pow(niz[i],2)//(niz[i] je broj,2 je stepen)
    niz[i] = 'paran'
    //niz[i] = niz[i] * niz[i];
    } else if (niz[i] % 2 === 1)
}
console.log(niz);
*/
/*
for (var i = 0; i <= niz.length - 1; i++) {
    if (niz[i] % 2 === 0) {
      niz[i] = Math.sqrt(niz[i]); // square root - kvadratni koren
      } else if (niz[i] % 2 === 1) {
      } else { 
        //niz[i] = Math.pow(niz[i],2)//(niz[i] je broj,2 je stepen)
    niz[i] = niz[i] * niz[i];
    }
}
console.log(niz);
*/
var niz = [1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 6, 7, 8, 8, 9];

var resultDiv = document.getElementById("result");

for (var i = 0; i <= niz.length - 1; i++) {
  var el = document.createElement("p");
  if (niz[i] % 2 === 0) {
    el.textContent = "paran";
  } else {
    el.textContent = "neparan";
  }
  niz[i] = el; // html element
}

//for (i = 0; i <= niz.length - 1; i++) {
//  resultDiv.appendChild(niz[i]);
//}
//console.log(niz);

// for (i = 0; i <= htmlElements.length - 1; i++) {
//   resultDiv.appendChild(niz[i]);
// }
htmlElements.forEach(function (item, index) {
  resultDiv.appendChild(item);
});
console.log(niz)