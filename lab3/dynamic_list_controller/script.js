// --- Element References ---
const addItemBtn = document.getElementById("additem");
const removeItemBtn = document.getElementById("removeitem");
const itemList = document.getElementById("item_list");
const inputSection = document.getElementById("input_section");
const newItemInput = document.getElementById("new-item-input");
const addBtn = document.getElementById("add_btn");

// --- Initial State: hide the input section ---
inputSection.style.display = "none";

// --- Show input section when "Add Item" is clicked ---
addItemBtn.addEventListener("click", () => {
  inputSection.style.display = "flex"; // or "block" depending on your CSS
  newItemInput.focus();
});

// --- Add a new list item ---
function addToList() {
  const value = newItemInput.value.trim();
  if (!value) return;

  const newItem = document.createElement("li");
  newItem.textContent = value;
  itemList.appendChild(newItem);

  // Reset input and hide input section
  newItemInput.value = "";
  inputSection.style.display = "none";
}

// --- Trigger add on button click ---
addBtn.addEventListener("click", addToList);

// --- Trigger add on Enter key press ---
newItemInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addToList();
});

// --- Remove the last list item ---
removeItemBtn.addEventListener("click", () => {
  const lastItem = itemList.lastElementChild;
  if (lastItem) itemList.removeChild(lastItem);
});