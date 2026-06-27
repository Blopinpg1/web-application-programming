document.getElementById("add_btn").addEventListener("click", addRow);

function addRow() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  if (name === "" || age === "") {
    alert("Please fill all fields");
    return;
  }

  const table = document.getElementById("table");

  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.innerText = name;

  const ageCell = document.createElement("td");
  ageCell.innerText = age;

  const actionCell = document.createElement("td");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";

  deleteBtn.onclick = function () {
    row.remove();
  };

  actionCell.appendChild(deleteBtn);

  row.appendChild(nameCell);
  row.appendChild(ageCell);
  row.appendChild(actionCell);

  table.appendChild(row);

  // Clear inputs
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}