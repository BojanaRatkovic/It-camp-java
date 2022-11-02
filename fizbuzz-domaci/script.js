var i;
var fizzBuzz = 0,fizz = 0,buzz = 0;

document.getElementById('calculate').addEventListener('click',function () {
    prviBroj = document.getElementById('prva').value;
    drugiBroj = document.getElementById('druga').value;

    for (let i = 1; i <= 101; i++) { 
        if(i % 3 === 0 && i % 5 === 0 ) {
        console.log("Fizz Buzz");
        fizzBuzz++
    }
        else if(i % 3 === 0) {
        console.log("Fizz");
        fizz++ 
    }
        else if(i % 5 === 0) {
        console.log("Buzz");
        buzz++ 
    }
        else {
            console.log(i);
        }
    }
    
    document.getElementById('fb').textContent = fizzBuzz;
    document.getElementById('f').textContent = fizz;
    document.getElementById('b').textContent = buzz;
});