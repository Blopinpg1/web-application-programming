//   const d = document.querySelector(".display-log")
const form = document.getElementById('form');
const ageInput = document.getElementById('age').value;
const ageWarning = document.getElementById('display-log');

ageWarning.style.display = 'none';

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

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const age = Number(document.getElementById('age').value);

  if (age < 16) {
    ageWarning.style.display = 'block';
    return;
  }

  ageWarning.style.display = 'none';
  const successMessage = document.getElementById('success-message');
  successMessage.style.display = 'block';

  setTimeout(function () {
    successMessage.style.display = 'none';
    form.reset();
  }, 3000); // Hide after 3 seconds
});
