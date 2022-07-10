var startButton = document.getElementById("btn");
var timeEl = document.getElementById("time-block");
var startingContentEl = document.querySelector(".content-container");
var quizEl = document.querySelector(".quiz");
var scoreEl = document.getElementById("score-message");
var feedbackEl = document.querySelector(".feedback");
var questionEl = document.getElementById("question");


var questions = [{
  question: "Commonly used data types DO NOT include:",
  options: ["Strings", "Booleans", "Alerts", "Numbers"],
  answer: "Alert"
},
{
  question: "The condition in an if/else statement is enclosed with _____.",
  options: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
  answer: "Curly Brackets"
},
{
  question: "Arrays in JavaScript can be used to store:",
  options: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
  answer: "All of the Above"
},
{
  question: "A very useful tool used during development and debugging for printing content to the debugger is:",
  options: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
  answer: "console.log"
}];

startButton.addEventListener("click", function () {
  // startTimer();
  startQuiz();
});

var timeLeft = 120;

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
  startingContentEl.classList.add("hidden");

  questionEl.innerText = questions.question;

}

// WHEN I answer a question
// THEN I am presented with another question





// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


// WHEN the game is over
// THEN I can save my initials and score




