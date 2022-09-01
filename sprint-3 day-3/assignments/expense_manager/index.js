document.querySelector("form").addEventListener("submit", inputData);
function inputData(event) {
  event.preventDefault();

  let month = document.querySelector("#month").value;
  let income = document.querySelector("#income").value;
  let expense = document.querySelector("#expense").value;

  let card = document.createElement("div");
  let heading = document.createElement("h1");
  heading.innerText = month;

  let incomeDiv = document.createElement("p");
  incomeDiv.innerText = income;

  let expenses = document.createElement("p");
  expenses.innerText = expense;

  let savings = document.createElement("p");
  if (income < expense) {
    savings.innerText = "DEBT";
    savings.style.color = "red";
  } else if (income > expense) {
    savings.innerText = "SAVE";
    savings.style.color = "green";
  } else {
    savings.innerText = "BREAKEVEN";
    savings.style.color = "orange";
  }

  let deleteitem = document.createElement("button");
  deleteitem.innerText = "Delete";
  deleteitem.style = "none";

  deleteitem.addEventListener("click", remove);
  function remove() {
    card.parentNode.removeChild(card);
  }

  card.append(heading, incomeDiv, expenses, savings, deleteitem);
  document.getElementById("report").append(card);
}
