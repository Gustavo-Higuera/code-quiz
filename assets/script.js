var startButton = document.getElementById("btn");
var timeEl = document.getElementById("time-block");
var startingContentEl = document.querySelector(".content-container");
var quizEl = document.querySelector(".quiz");

var bodyEl = document.body;

var h1El = document.createElement("h1");
h1El.setAttribute("style", " margin-bottom: 2em; font-size: 50px; font-weight: bolder;")

var ulElement = document.createElement("ul");
ulElement.setAttribute("style", "display: flex; flex-direction: column; width: 25%;")

var buttonEl1 = document.createElement("button");
buttonEl1.setAttribute("type", "submit");
buttonEl1.setAttribute("style", "background-color: purple; color: white; font-size: 25px; padding: 10px 15px; cursor: pointer; margin-bottom: 10px;");

var buttonEl2 = document.createElement("button");
buttonEl2.setAttribute("type", "submit");
buttonEl2.setAttribute("style", "background-color: purple; color: white; font-size: 25px; padding: 10px 15px; cursor: pointer; margin-bottom: 10px;");

var buttonEl3 = document.createElement("button");
buttonEl3.setAttribute("type", "submit");
buttonEl3.setAttribute("style", "background-color: purple; color: white; font-size: 25px; padding: 10px 15px; cursor: pointer; margin-bottom: 10px;");

var buttonEl4 = document.createElement("button");
buttonEl4.setAttribute("type", "submit");
buttonEl4.setAttribute("style", "background-color: purple; color: white; font-size: 25px; padding: 10px 15px; cursor: pointer; margin-bottom: 10px;");

var quizEl = document.querySelector(".quiz");
quizEl.setAttribute("style", "display: flex; justify-content: center; align-items: center; align-self: center; flex-direction: column; width: 100%;");

var timeLeft = 120;

startButton.addEventListener("click", function () {
  startTimer();
  startQuiz();
});

function startTimer() {
  var timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = `${timeLeft} seconds remaining`;
    if (timeLeft === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function startQuiz() {
  startingContentEl.setAttribute("style", "display: none;");

  quizEl.appendChild(h1El).textContent = "Commonly used data types DO NOT include:";
  quizEl.appendChild(ulElement);

  ulElement.appendChild(buttonEl1).textContent = "Strings";
  ulElement.appendChild(buttonEl2).textContent = "Booleans";
  ulElement.appendChild(buttonEl3).textContent = "Alerts";
  ulElement.appendChild(buttonEl4).textContent = "Numbers";

}

