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