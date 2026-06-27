const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop default submit
  const emailInput = document.getElementById('email');
  const email = document.getElementById('email').value;
  const role = document.getElementById('role').value;
  const errorSpan = document.getElementById('error-message');
  const passwordInput = document.getElementById('password');
  const confirmInput = document.getElementById('confirmpassword');
  const password = passwordInput.value;
  const confirmpassword = confirmInput.value;

  const errorPass = document.getElementById('confirm-error');

  let isValid = true;

  errorSpan.textContent = '';
  errorPass.textContent = '';

  emailInput.classList.remove('error');
  passwordInput.classList.remove('error');
  confirmInput.classList.remove('error');

  if (role === 'Default') {
    errorSpan.textContent = 'Please select a role';
    isValid = false;
  }

  if (role === 'Student' && !email.endsWith('@student.edu.np')) {
    errorSpan.textContent = 'Invalid student email';
    emailInput.classList.add('error');
    isValid = false;
  } else if (role === 'Teacher' && !email.endsWith('@tutor.edu.np')) {
    errorSpan.textContent = 'Invalid teacher email';
    emailInput.classList.add('error');
    isValid = false;
  }

  if (password !== confirmpassword) {
    errorPass.textContent = 'Passwords do not match';
    passwordInput.classList.add('error');
    confirmInput.classList.add('error');
    isValid = false;
  }

  if (isValid) {
    form.submit();
  }
});
