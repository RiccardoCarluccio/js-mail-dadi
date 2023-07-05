const btnRoll = document.querySelector('.btn-roll');

btnRoll.addEventListener('click', function roll() {
  const userResult = Math.floor(Math.random() * 6) + 1;
  const cpuResult = Math.floor(Math.random() * 6) + 1;

  console.log(userResult);  //per testare
  console.log(cpuResult);  //in console

  document.getElementById("user-roll").innerHTML = `You rolled: ${userResult}`;
  document.getElementById("cpu-roll").innerHTML = `The computer rolled: ${cpuResult}`;

  if (userResult > cpuResult) {
    document.getElementById("result-message").innerHTML = 'You won the roll'
  } else if (userResult === cpuResult) {
    document.getElementById("result-message").innerHTML = 'Draw'
  } else {
    document.getElementById("result-message").innerHTML = 'You lost the roll'
  }
})

//BONUS con somma di 3 numeri
const btnRollRange = document.querySelector('.btn-roll-range');

const userFirstRoll = document.getElementById('roll-range-1').value;
const userSecondRoll = document.getElementById('roll-range-2').value;
const userThirdRoll = document.getElementById('roll-range-3').value;

btnRollRange.addEventListener('click', function nuBordell() {
  const finalUserResult = parseInt(userFirstRoll) + parseInt(userSecondRoll) + parseInt(userThirdRoll);
  console.log(finalUserResult);

  const cpuFirstRoll = Math.floor(Math.random() * parseInt(userFirstRoll) * 2) + 1;
  const cpuSecondRoll = Math.floor(Math.random() * parseInt(userSecondRoll) * 2) + 1;
  const cpuThirdRoll = Math.floor(Math.random() * parseInt(userThirdRoll) * 2) + 1;

  console.log(cpuFirstRoll);
  console.log(cpuSecondRoll)
  console.log(cpuThirdRoll)

  const finalCpuResult = parseInt(cpuFirstRoll) + parseInt(cpuSecondRoll) + parseInt(cpuThirdRoll);

  document.getElementById("final-user-result").innerHTML = `You rolled: ${finalUserResult}`;
  document.getElementById("final-cpu-result").innerHTML = `The computer rolled: ${finalCpuResult}`;

  if (finalUserResult > finalCpuResult) {
    document.getElementById("final-result-message").innerHTML = 'You won the roll'
  } else if (finalUserResult === finalCpuResult) {
    document.getElementById("final-result-message").innerHTML = 'Draw'
  } else {
    document.getElementById("final-result-message").innerHTML = 'You lost the roll'
  }

  document.getElementById("what-if").innerHTML = 'What if the computer rolled a value lower than 18?'
  
  const whatIf = document.getElementById("what-if");
  const mioPadre = document.querySelector(".mio-padre");

  if (finalCpuResult < 18) {  
    whatIf.classList.replace("d-block", "d-none"); //usare .replace:block>none non funziona

    mioPadre.classList.add("si-corre");
  }

  if (finalCpuResult >= 18) {    //non funziona per ri-mostrare il messaggio di "What if?"
    whatIf.classList.replace("d-none", "d-block");

    mioPadre.classList.remove("si-corre");
  }

})