var startBtn = document.getElementById("btn");
var timeEl = document.getElementById("time-block");
var startingContentEl = document.querySelector(".content-container");
var quizEl = document.querySelector(".quiz");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var highScoresEl = document.getElementById("high-score");
var scoreEl = document.getElementById("current-score");
var feedbackEl = document.getElementById("feedback");

var option1 = document.getElementById("option-btn1");
var option2 = document.getElementById("option-btn2");
var option3 = document.getElementById("option-btn3");
var option4 = document.getElementById("option-btn4");

var timeLeft = 60;
var score = 0;

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
},
{
  question: "What is 2 + 2",
  options: ["8", "2", "4", "0"],
  answer: "4"
}];

// When button start quiz is selected, it will start the timer, and call startQuiz function
startBtn.addEventListener("click", function () {
  startTimer();
  startQuiz();
});

function startTimer() {
  var timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = `${timeLeft} seconds remaining`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      timeEl.textContent = "Out of time!";
      // endGame();
    }
  }, 1000);
}

function startQuiz() {
  // when the start quiz button is clicked, all of the original content on the page is being hidden
  startingContentEl.classList.add("hidden");
  highScoresEl.classList.add("hidden");
  scoreEl.classList.remove("hidden");
  scoreEl.innerHTML = "Current Score: 0";

  answersEl.classList.remove("hidden");
  option1.classList.remove("hidden");
  option2.classList.remove("hidden");
  option3.classList.remove("hidden");
  option4.classList.remove("hidden");


  createQuiz();
}
var questionsArr = [questions[0].question, questions[1].question, questions[2].question, questions[3].question, questions[4].question];

var currentQuestionIndex = questions[0].question;

function createQuiz() {
  for (let i = 0; i < questionsArr.length; i++) {
    questionEl.innerText = currentQuestionIndex;
    option1.innerText = questions[i].options[0];
    option2.innerText = questions[i].options[1];
    option3.innerText = questions[i].options[2];
    option4.innerText = questions[i].options[3];

    validateAnswer(questions[i].answer);

  }

}

var optionArr = [option1, option2, option3, option4];

function validateAnswer(answer) {
  for (let i = 0; i < optionArr.length; i++) {
    optionArr[i].addEventListener("click", function (e) {
      // if the innerText of the clicked button (target) matches the answer, this will run as true 
      if (e.target.innerText === answer) {
        correctFeedback();
        score++;
        scoreEl.textContent = "Current Score: " + score;
        currentQuestionIndex++;
      } else {
        timeLeft -= 10;
        incorrectFeedback();
      }
    })
  }
}

function correctFeedback() {
  var correctMessage = "You answered the last question CORRECT! +1 point.";
  feedbackEl.innerText = correctMessage;
}

function incorrectFeedback() {
  var incorrectMessage = "You answered the last question INCORRECT! -10 seconds.";
  feedbackEl.innerText = incorrectMessage;
}

// // This function is called after clicking on the next question button
// function question1() {
//   // This is displaying the first question from the questions array of objects
//   questionEl.innerText = questions[0].question;
//   // below, all of my option buttons are getting their hidden class removed

//   // all of my option buttons are being filled with options from the questions array
//   option1.innerText = questions[0].options[0];
//   option2.innerText = questions[0].options[1];
//   option3.innerText = questions[0].options[2];
//   option4.innerText = questions[0].options[3];
//   // this is calling the validateAnswer function, and passing in the answer as a parameter
//   validateQ1();
// }

// function validateQ1() {
//   for (let i = 0; i < optionArr.length; i++) {
//     optionArr[i].addEventListener("click", function (e) {
//       // if the innerText of the clicked button (target) matches the answer, this will run as true
//       if (e.target.innerText === questions[0].answer) {
//         correctFeedback();
//         score++;
//         scoreEl.textContent = "Current Score: " + score;
//         question2();
//       } else {
//         timeLeft -= 10;
//         incorrectFeedback();
//       }
//     })
//   }
// }

// function question2() {
//   questionEl.innerText = questions[1].question;
//   option1.innerText = questions[1].options[0];
//   option2.innerText = questions[1].options[1];
//   option3.innerText = questions[1].options[2];
//   option4.innerText = questions[1].options[3];

//   validateQ2();
// }


// function validateQ2() {
//   for (let i = 0; i < optionArr.length; i++) {
//     optionArr[i].addEventListener("click", function (e) {
//       // if the innerText of the clicked button (target) matches the answer, this will run as true
//       if (e.target.innerText === questions[1].answer) {
//         correctFeedback();
//         score++;
//         scoreEl.textContent = "Current Score: " + score;
//         question3();
//       } else {
//         timeLeft -= 10;
//         incorrectFeedback();
//       }
//     })
//   }
// }

// function question3() {
//   questionEl.innerText = questions[2].question;
//   option1.innerText = questions[2].options[0];
//   option2.innerText = questions[2].options[1];
//   option3.innerText = questions[2].options[2];
//   option4.innerText = questions[2].options[3];
//   validateQ3();
// }

// function validateQ3() {
//   for (let i = 0; i < optionArr.length; i++) {
//     optionArr[i].addEventListener("click", function (e) {
//       // if the innerText of the clicked button (target) matches the answer, this will run as true
//       if (e.target.innerText === questions[2].answer) {
//         correctFeedback();
//         score++;
//         scoreEl.textContent = "Current Score: " + score;
//         question4();
//       } else {
//         timeLeft -= 10;
//         incorrectFeedback();
//       }
//     })
//   }
// }

// function question4() {
//   questionEl.innerText = questions[3].question;
//   option1.innerText = questions[3].options[0];
//   option2.innerText = questions[3].options[1];
//   option3.innerText = questions[3].options[2];
//   option4.innerText = questions[3].options[3];
//   validateQ4();
// }

// function validateQ4() {
//   for (let i = 0; i < optionArr.length; i++) {
//     optionArr[i].addEventListener("click", function (e) {
//       // if the innerText of the clicked button (target) matches the answer, this will run as true
//       if (e.target.innerText === questions[3].answer) {
//         correctFeedback();
//         score++;
//         scoreEl.textContent = "Current Score: " + score;
//         question5();
//       } else {
//         timeLeft -= 10;
//         incorrectFeedback();
//       }
//     })
//   }
// }

// function question5() {
//   questionEl.innerText = questions[4].question;
//   option1.innerText = questions[4].options[0];
//   option2.innerText = questions[4].options[1];
//   option3.innerText = questions[4].options[2];
//   option4.innerText = questions[4].options[3];
//   validateQ5();
// }

// function validateQ5() {
//   for (let i = 0; i < optionArr.length; i++) {
//     optionArr[i].addEventListener("click", function (e) {
//       // if the innerText of the clicked button (target) matches the answer, this will run as true
//       if (e.target.innerText === questions[4].answer) {
//         correctFeedback();
//         score++;
//         scoreEl.textContent = "Current Score: " + score;
//         endGame();
//       } else {
//         timeLeft -= 10;
//         incorrectFeedback();
//       }
//     })
//   }
// }

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


// WHEN the game is over
// THEN I can save my initials and score
