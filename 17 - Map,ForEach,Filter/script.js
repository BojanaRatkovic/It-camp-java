// MAP METODA //

/*
var arr = [1,2,3,4,5];
arr = arr.map(function (item,index){
    return item * 2;
});
//return je nova vrednost item-a
//item*item pomnozi broj sa samim sobom 
*/

var htmlElements = arr.map(function (item,index) {
    var element = document.createElement("p");
    if (item % 2 === 0) {
        element.textContent = "paran";
    } else {
        element.textContent = "neparan";
    }
    return element;
});

// forEach METODA //

htmlElements.forEach(function(item,index){
    resultDiv.appendChild(item);
});
console.log(arr);

// FILTER METODA //

var arr = [1,2,3,4,5,6,7,8,9];
var filteredArr = arr.filter(function(item,index) {
    return item%2 === 0; 
        //index % 2 === 0;
});
console.log(filteredArr);

//Map metoda se koristi za za stvaranje novog niza,tako sto transformise svaki element izvornog niza u neki drugi element.
//ForEach metoda se koristi za iteraciju kroz svaki element u nizu i izvršavanje odredjene funkcije za svaki element u nizu. 
//Filter metoda se koristi za filtriranje elemenata u nizu na osnovu nekog specificnog uslova.