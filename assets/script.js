var startButton = document.getElementById("btn");
var timeEl = document.getElementById("time-block");
var startingContentEl = document.querySelector(".content-container");
var quizEl = document.querySelector(".quiz");
var highScoresEl = document.getElementById("high-score");
var currentScoreEl = document.getElementById("current-score");
var feedbackEl = document.querySelector(".feedback");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var answerButton1 = document.getElementById("answer-btn1");
var answerButton2 = document.getElementById("answer-btn2");
var answerButton3 = document.getElementById("answer-btn3");
var answerButton4 = document.getElementById("answer-btn4");

var timeLeft = 120;
var playerScore = 0;

var questions = [{
  question: "Commonly used data types DO NOT include:",
  options: ["Strings", "Booleans", "Alerts", "Numbers"],
  answer: "Alerts"
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

// When button start quiz is selected, it will start the timer, and call startQuiz function
startButton.addEventListener("click", function () {
  startTimer();
  startQuiz();
});

var questionIndex = 0;
currentScoreEl.textContent = `Current Score: ${playerScore}`;

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
  highScoresEl.classList.add("hidden");
  currentScoreEl.classList.remove("hidden");

  showQuestions();
}

function showQuestions() {
  questionEl.innerText = questions[0].question;
  answersEl.classList.remove("hidden");
  answerButton1.classList.remove("hidden");
  answerButton2.classList.remove("hidden");
  answerButton3.classList.remove("hidden");
  answerButton4.classList.remove("hidden");

  answerButton1.innerText = questions[0].options[0];
  answerButton2.innerText = questions[0].options[1];
  answerButton3.innerText = questions[0].options[2];
  answerButton4.innerText = questions[0].options[3];

  validateAnswer();
}

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

function validateAnswer() {
  answerButton1.addEventListener("click", function (e) {
    if (e.target.innerText === questions[0].answer) {
      console.log("This is the correct answer");
      playerScore += 10;
    } else {
      console.log("Wrong!");
      timeLeft -= 10;
    }
  })
  answerButton2.addEventListener("click", function (e) {
    if (e.target.innerText === questions[0].answer) {
      console.log("This is the correct answer");
      playerScore += 10;
    } else {
      console.log("Wrong!");
      timeLeft -= 10;
    }
  })
  answerButton3.addEventListener("click", function (e) {
    if (e.target.innerText === questions[0].answer) {
      console.log("This is the correct answer");
      playerScore += 10;
    } else {
      console.log("Wrong!");
    }
  })
  answerButton4.addEventListener("click", function (e) {
    if (e.target.innerText === questions[0].answer) {
      console.log("This is the correct answer");
      playerScore += 10;
    } else {
      console.log("Wrong!");
      timeLeft -= 10;
    }
  })
}



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


// WHEN the game is over
// THEN I can save my initials and score




