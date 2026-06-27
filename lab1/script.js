//   const d = document.querySelector(".display-log")
const form = document.getElementById("form");

//   function validateForm() {
//     const age = Number(document.getElementById("age").value);

//     if (age < 16) {
//       alert("Registration not allowed. Age must be at least 16.");
//       d.style.display = "block"
//       return false;

//     }
//     alert("Registration successful");
//     return true;
//   }

form.addEventListener("submit", function (event) {
  const ageInput = document.getElementById("age").value;
  const ageWarning = document.getElementsById("display-log");
  if (ageInput < 16) {
    event.preventDefault();
    ageWarning.style.display = "block";
    return;
  }
  ageWarning.style.display = "none";
  alert("Form submitted successfully!!!");
});
