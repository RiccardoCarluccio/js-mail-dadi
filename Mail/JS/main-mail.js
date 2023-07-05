const btnEmailCheck = document.querySelector(".btn-email-check");

const userEmail = document.getElementById("user-email");

const emailPrefixesStringed = 'abcdefghijklmnopqrstuvwxyz'; //mi conviene
const emailPrefixes = emailPrefixesStringed.split("");      //metterle
const emailSuffix = '@boolean.com';                         //dentro il for?
const emailArray = [];

for (i = 0; i < emailPrefixes.length; i++) {
  emailArray[i] = emailPrefixes[i] + emailSuffix;
}

console.log(emailArray);

btnEmailCheck.addEventListener('click', function getData() {
  const emailInput = userEmail.value;

  console.log(emailInput);
})