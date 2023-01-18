/*
var randomNumber = Math.random() * 2;
    (0-1)
    (0*2 , 1*2)
    (0-2)
var intNumber = Math.floor(randomNumber);
console.log(randomNumber);
*/

document.getElementById("calculate").addEventListener("click", function () {
    var randomNumber = Math.random() * 101;
    var intNumber = Math.floor(randomNumber);

    //   var name1 = document.getElementById("name1").value;
    //   var name2 = document.getElementById("name2").value;

    document.getElementById("result").textContent = intNumber + "%";
    });