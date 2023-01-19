/*
var arr = [1,2,true,'test',undefined,null,5,'test 123'];

var numbers = [];
var texts = [];
var booleans = [];
var object = [];

// typeof ===> "number" | "string" | "boolean" | "undefined"

for (var i = 0; i <= arr.length -1; i++) {
    if (typeof arr[i] === "numbers") {
        numbers.push(numbers);
    } else if (typeof arr[i] === "strings") {
        texts.push(strings);
    } else if (typeof arr[i] === "boolean") {
        booleans.push(booleans);
    } else if (typeof arr[i] === "object") {
        object.push(object);
    } 
}

var arr = [1,2,true,'test',undefined,5,'test 123'];

for (var i = 0; i <= arr.length - 1; i++) {
  var izabraniElement = arr[i];
  if (typeof izabraniElement === "number") {
    numbers.push(izabraniElement);
  } else if (typeof izabraniElement === "string") {
    strings.push(izabraniElement);
  } else if (typeof izabraniElement === "boolean") {
    booleans.push(izabraniElement);
  } else if (typeof izabraniElement === "undefined") {
    console.log("Element niza sa indeksom " + i + " je undefined");
  }
}

console.log(numbers);
console.log(booleans);
console.log(strings);
*/

//ARRAY JOIN & STRING SPLIT METHODS

var arr = ['Sara','Ana','Filip','Davud'];

/*
var result = "";
for (var i = 0;i <= arr.length -1;i++) {
    if (i !== 0) {
        result = result + "-" + arr[i];
    } else { 
        result = result + arr[i];
    }
}
*/
console.log(arr.join("---")); //pretvara niz u string
var text = "Sara---Ana---Filip---Davud";
console.log(text.split(".")); // pretvara string u niz

/*
var loremIpsumText = "Lorem.Ipsum.is.simply.dummy.text.of the.printing.and.typesetting.industry";
console.log(text.split(".")); //pretvara string u niz

var nekiTekst = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as theirdefault model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
var recenice = nekiTekst.split(".")
var reci = nekiTekst.split(" ");

console.log("Recenice" , recenice);
console.log("Reci" , reci)
console.log('Dati tekst ima ' + recenice.length + ' recenica');
console.log('Dati tekst ima ' + reci.length + ' reci');
*/

///////////////////////////////////////////////////////////

// TEKST ZADATKA

//Naci broj slova iz datog teksta (nekiText)
/*
1. Izdvojiti iz teksta sve karaktere
  => var charactersInText = nekiTekst.split();  // niz svih karaktera u tekstu (ukljucujuci tacku, zarez i razmak)
  => console.log(charactersInText);
2.Filtrirati niz i iz njega izbaciti tacke, zareze ,razmake i prazne stringove
  => if(slovo !== '' && slovo !== ' ' && slovo !== '.' && slovo !== ',')
3.Izbrojati koliko taj dobijeni niz ima elemenata
*/

var nekiTekst = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as theirdefault model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.";
var recenice = nekiTekst.split(".")
var reci = nekiTekst.split(" ");

console.log("Recenice" , recenice);
console.log("Reci" , reci);