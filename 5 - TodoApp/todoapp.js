var num = 0;

function addNewListItem() {
  var list = document.getElementById("list");
  var taskName = document.getElementById("taskName").value;

  var listItem = document.createElement("button");
  listItem.className = "list-items";
  listItem.textContent = taskName;

  list.appendChild(listItem);

  num++; //num = num + 1;

  document.getElementById("taskName").value = "";
  document.getElementById("numberOfItems").textContent = num;
}
document.getElementById("plus").addEventListener("click", function () {
  addNewListItem();
});

document.getElementById("clear").addEventListener("click", function () {
  var list = document.getElementById("list");
  list.innerHTML = "";

  num = 0;
  document.getElementById("numberOfItems").textContent = num;
});

document
  .getElementById("taskName")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addNewListItem();
    }
  });
