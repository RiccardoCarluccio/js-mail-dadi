const btnEmailCheck = document.querySelector(".btn-email-check");

const userEmail = document.getElementById("user-email");

btnEmailCheck.addEventListener('click', function getData() {
  const emailInput = userEmail.value;

  console.log(emailInput);
})