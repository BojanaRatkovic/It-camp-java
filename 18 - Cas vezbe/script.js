var grades = [];

var mainSubject = [
  "Matematika",
  "Srpski",
  "Engleski",
  "Fizika",
  "Hemija",
  "Biologija",
];

document.getElementById("addB").addEventListener("click", function () {
  var grade = +document.getElementById("num").value;
  var gradeSubject = document.getElementById("txt").value;

  var grade = { num: gradeNum, subject: gradeSubject };
  grades.push(grade);

  document.getElementById("num").value = "";
  document.getElementById("txt").value = "";
  return grade;
});

document.getElementById("showGrades").addEventListener("click", function () {
  //    var mainSubjectNames = grades.map(function(item,index){
  //        return item.subject;
  //    });
  var filteredGrades = grades.filter(function (item, index) {
    return mainSubject.includes(item.subject);
  });
  var parent = document.getElementById("listOfGrades");
  parent.innerHTML = "";
  filteredGrades.forEach(function (item, index) {
    var child = document.createElement("li");
    child.textContent = item.subject + "-" + item.num;
    parent.appendChild(child);
  });
});

/*
var numbers = [1,2,3,4,5,6,7,8,9,10];
var filteredNumbers = numbers.filter(function(item,index){
    return item % 2 === 0;
});

numbers = numbers.map(function(item,index){
    return {value: item,indeks: index};
});
*/

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// {value: 1, index: 0}

var ucenici = [
  {
    ime: "Haris",
    vladanje: 4,
  },
  {
    ime: "Muhamed",
    vladanje: 5,
  },
  {
    ime: "Halil",
    vladanje: 3,
  },
];

var nakonSmanjenaOcena = ucenici.map(function (item, index) {
  if (item.ime === "Muhamed") {
    return { ime: item.ime, vladanje: item.vladanje - 1 };
  } else {
    return item;
  }
});

console.log(nakonSmanjenaOcena);
