const inputBox = document.getElementById("inputbox");
const listsName = document.getElementById("lists");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter your task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listsName.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  storeData();
}
listsName.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      storeData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      storeData();
    }
  },
  false
);

function storeData() {
  localStorage.setItem("data", lists.innerHTML);
}

function showTask() {
  lists.innerHTML = localStorage.getItem("data");
}
showTask();
