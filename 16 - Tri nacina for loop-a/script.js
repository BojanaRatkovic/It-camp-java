var grades = [];

function getGrade() {
  var grade = +document.getElementById("num").value;
  document.getElementById("num").value = "";
  return grade;

  var gradeSubject = document.getElementById("subjectName").value;

  var ocena = { broj: grade.num, predmet: gradeSubject.subjectName };

  document.getElementById("num").value = "";
  document.getElementById("subjectNeme").value = "";
  return grade;
}

function addGradeToArray(grade) {
  grades.push(grade);
}

function sortCurrentArrayOfGrade() {
  for (var firstGrade of grades) {
    for (var secondGrade of grades) {
      if (firstGrade.num < secondGrade.num) {
        var pom = firstGrade;
        firstGrade = secondGrade;
        secondGrade = pom;
      }
    }
  }
}

function renderAllGrades() {
  var list = getElementById("listOfGrades");
  document.getElementById("listOfGrades").innerHTML = "";
  grades.forEach(function (item, index) {
    /*var izabranaOcena = grades[i] - kad se unese prva ocena imace index 0,druga index 1,itd*/
    var listItem = document.createElement("li");
    listItem.textContent = item.num + " " + item.subject;
    list.appendChild(listItem);
  });
}

function calculateAverage() {
  var sum = 0;
  for (var selectedGarde of grades) {
    sum = sum + selectedGarde.num;
  }
  return sum;
}

function calculateSumOfGrades() {
  var sum = 0;
  grades.forEach(function (item, index) {
    sum = sum + item.num;
  });
  return sum;
}

function showAverageGrade(average) {
  document.getElementById("average").textContent = average;
}

function showTheArrayInConsole() {
  console.log(grades);
}

document.getElementById("button").addEventListener("click", function () {
  var ocena = getGrade();
  addGradeToArray(ocena);
  sortCurrentArrayOfGrade();
  renderAllGrades();
  var average = calculateAverage();
  showAverageGrade(average);
  showTheArrayInConsole();
});
