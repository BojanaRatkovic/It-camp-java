var finalValue; // Rezultat
// finalValue === undefined
var currentValue = 0; // Trenutni broj koji unosimo
var op = ""; // Operacija koju smo izabrali

function showCurrentValues () {
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
}

function onNumberClickHandler (number){
  currentValue = currentValue * 10 + number;
  document.getElementById("result").textContent = currentValue;
  showCurrentValues ();
}

document.getElementById("one").addEventListener("click", function () {
  onNumberClickHandler(1);
});

document.getElementById("two").addEventListener("click", function () {
  currentValue = currentValue * 10 + 2;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("three").addEventListener("click", function () {
  currentValue = currentValue * 10 + 3;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("four").addEventListener("click", function () {
  currentValue = currentValue * 10 + 4;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("five").addEventListener("click", function () {
  currentValue = currentValue * 10 + 5;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("six").addEventListener("click", function () {
  currentValue = currentValue * 10 + 6;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);

  document.getElementById("result").textContent = currentValue;
});

document.getElementById("seven").addEventListener("click", function () {
  currentValue = currentValue * 10 + 7;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("eight").addEventListener("click", function () {
  currentValue = currentValue * 10 + 8;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("nine").addEventListener("click", function () {
  currentValue = currentValue * 10 + 9;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("zero").addEventListener("click", function () {
  currentValue = currentValue * 10 + 0;
  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
  console.log("op", op);
  document.getElementById("result").textContent = currentValue;
});

document.getElementById("delate").addEventListener("click", function () {
  document.getElementById("result").textContent = "";

  // NASE POCETNE VREDNOSTI
  currentValue = 0;
  finalValue = undefined;
  op = "";
});

document.getElementById("equal").addEventListener("click", function () {
  if (op === "") {
    finalValue = currentValue;
  } else if (op === "+") {
    finalValue = finalValue + currentValue;
  } else if (op === "-") {
    finalValue = finalValue - currentValue;
  } else if (op === "*") {
    finalValue = finalValue * currentValue;
  } else if (op === "/") {
    finalValue = finalValue / currentValue;
  }

  console.log("op", op);
  console.log("finalValue on EQUAL", finalValue);
  document.getElementById("result").textContent = finalValue;

  console.log("==== Vracamo varijable na pocetne vrednosti ====");
  op = "";
  console.log("inital op", op);
  currentValue = 0;
  finalValue = undefined;
  console.log("inital finalValue", finalValue);
  console.log("initial currentValue", currentValue);
});

document.getElementById("plus").addEventListener("click", function () {
  if (op === "") {
    finalValue = currentValue;
  } else if (op === "+") {
    finalValue = finalValue + currentValue;
  } else if (op === "-") {
    finalValue = finalValue - currentValue;
  } else if (op === "*") {
    finalValue = finalValue * currentValue;
  } else if (op === "/") {
    finalValue = finalValue / currentValue;
  }

  console.log("op", op);
  op = "+";
  console.log("new OP", op);
  currentValue = 0;
  document.getElementById("result").textContent = "";

  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
});

document.getElementById("minus").addEventListener("click", function () {
  if (op === "") {//ako operacija prethodno nije izabrana
    finalValue = currentValue;
  } else if (op === "+") {
    finalValue = finalValue + currentValue;
  } else if (op === "-") {
    finalValue = finalValue - currentValue;
  } else if (op === "*") {
    finalValue = finalValue * currentValue;
  } else if (op === "/") {
    finalValue = finalValue / currentValue;
  }

  console.log("op", op);
  op = "-";
  console.log("new OP", op);
  currentValue = 0;
  document.getElementById("result").textContent = "";

  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
});

document.getElementById("puta").addEventListener("click", function () {

  switch(op){
    case "":
      finalValue = currentValue;
      break;
    case "+":
      finalValue = finalValue + currentValue;
      break;
    case "-":
      finalValue = finalValue - currentValue;
      break;
    case "*":
      finalValue = finalValue * currentValue;
      break;
    case "/":
      finalValue = finalValue / currentValue;
      break;
    default:
      break;
  }

  console.log("op", op);
  op = "*";
  console.log("new OP", op);
  currentValue = 0;
  document.getElementById("result").textContent = "";

  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
});

document.getElementById("podeli").addEventListener("click", function () {
  if (op === "") {
    finalValue = currentValue;
  } else if (op === "+") {
    finalValue = finalValue + currentValue;
  } else if (op === "-") {
    finalValue = finalValue - currentValue;
  } else if (op === "*") {
    finalValue = finalValue * currentValue;
  } else if (op === "/") {
    finalValue = finalValue / currentValue;
  }

  console.log("op", op);
  op = "/";
  console.log("new OP", op);
  currentValue = 0;
  document.getElementById("result").textContent = "";

  console.log("finalValue", finalValue);
  console.log("currentValue", currentValue);
});