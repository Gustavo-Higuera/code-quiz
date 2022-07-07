var buttonEl = document.getElementById("btn");

buttonEl.addEventListener("click", startQuiz);
var timeLeft = 120;

function startQuiz() {
  setInterval(function(){
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
  }, 1000);
}