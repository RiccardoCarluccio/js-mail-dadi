const btnEmailCheck = document.querySelector(".btn-email-check");

const userEmail = document.getElementById("user-email");

const emailPrefixesStringed = 'abcdefghijklmnopqrstuvwxyz';
const emailPrefixes = emailPrefixesStringed.split("");
const emailSuffix = '@boolean.com';




btnEmailCheck.addEventListener('click', function getData() {
  const emailInput = userEmail.value;

  console.log(emailInput);
})