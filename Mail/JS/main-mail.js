const btnEmailCheck = document.querySelector(".btn-email-check");

const userEmail = document.getElementById("user-email");

// EMAIL GENERATOR
const emailPrefixesStringed = 'abcdefghijklmnopqrstuvwxyz';
const emailPrefixes = emailPrefixesStringed.split("");
const emailSuffix = '@boolean.com';
const emailArray = [];

for (i = 0; i < emailPrefixes.length; i++) {
  emailArray[i] = emailPrefixes[i] + emailSuffix;
}

console.log(emailArray);  //test funzionamento email generator
//FINE EMAIL GENERATOR

btnEmailCheck.addEventListener('click', function getEmail() {
  const emailInput = userEmail.value;

  console.log(emailInput);  //test funzionamento getEmail()

  //EMAIL CHECKER
  for (i = 0; i < emailArray.length; i++) {
    if (emailInput === emailArray[i]) {
      document.getElementById("access-confirmation").innerHTML = 'You can login';
    } //in che modo dare un messaggio di errore?
  }

  //INIZIO DOMAIN CHECKER
  const emailDomain = [];
  console.log(emailInput.split("@"));

  emailDomain = emailInput.split("@");
  console.log(emailDomain);
  
  if (emailDomain[1] !== 'boolean.com') {
    document.getElementById("access-confirmation").innerHTML = 'Wrong domain';
  }
  //FINE DOMAIN CHECKER
})