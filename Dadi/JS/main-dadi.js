const btnRoll = document.querySelector('.btn-roll');

btnRoll.addEventListener('click', function roll() {
  const userResult = Math.floor(Math.random() * 6) + 1;
  const cpuResult = Math.floor(Math.random() * 6) + 1;

  console.log(userResult);
  console.log(cpuResult);
})