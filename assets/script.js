var startBtn = document.getElementById("btn");
var nextBtn = document.getElementById("next-btn");
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

var timeLeft = 120;

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

// this button will be used to move to the next question
nextBtn.addEventListener("click", nextQuestion);


function startTimer() {
  var timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = `${timeLeft} seconds remaining`;
    if (timeLeft == 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function startQuiz() {
  // when the start quiz button is clicked, all of the original content on the page is being hidden
  startingContentEl.classList.add("hidden");
  highScoresEl.classList.add("hidden");
  scoreEl.classList.remove("hidden");
  nextBtn.classList.remove("hidden");

  question1();
}


// This function is called after clicking on the next question button
function nextQuestion (){
  var questionIndex = 0;
  var questionFunctions = [question1, question2]
  
}

function question1() {
  // This is displaying the first question from the questions array of objects
  questionEl.innerText = questions[0].question;
  // below, all of my option buttons are getting their hidden class removed
  answersEl.classList.remove("hidden");
  option1.classList.remove("hidden");
  option2.classList.remove("hidden");
  option3.classList.remove("hidden");
  option4.classList.remove("hidden");

// all of my option buttons are being filled with options from the questions array
  option1.innerText = questions[0].options[0];
  option2.innerText = questions[0].options[1];
  option3.innerText = questions[0].options[2];
  option4.innerText = questions[0].options[3];

  // this is calling the validateAnswer function, and passing in the answer as a parameter
  validateAnswer(questions[0].answer);
}

// this is placing all of my option buttons into an array
var optionArr = [option1, option2, option3, option4];

function validateAnswer(answer) {
  // the length of optionArr is 4, so this loop will run 4 times
  for (var i = 0; i < optionArr.length; i++) {

    // this is adding an event listener to every index [i] in the array
    optionArr[i].addEventListener("click", function (e) {
      // if the innerText of the clicked button (target) matches the answer, this will run as true 
      if (e.target.innerText === answer) {
        console.log("This is the correct answer");
        correctFeedback();


      } else {
        timeLeft -= 10;
        console.log("This is the incorrect answer")
        incorrectFeedback();
      }
    })
  }
}

function correctFeedback() {
  var correctMessage = "Correct! Adding 10 Points";
  feedbackEl.innerText = correctMessage;

  document.body.style.backgroundColor = "#42f55d";
}

function incorrectFeedback(){
  var incorrectMessage = "Incorrect!";
  feedbackEl.innerText = incorrectMessage;

  document.body.style.backgroundColor = "#f54242";
}

function question2() {
  questionEl.innerText = questions[1].question;

  option1.innerText = questions[1].options[0];
  option2.innerText = questions[1].options[1];
  option3.innerText = questions[1].options[2];
  option4.innerText = questions[1].options[3];
  validateAnswer(questions[1].answer);
}



// function question3() {
//   questionEl.innerText = questions[2].question;

//   option1.innerText = questions[2].options[0];
//   option2.innerText = questions[2].options[1];
//   option3.innerText = questions[2].options[2];
//   option4.innerText = questions[2].options[3];
//   validateQ3();
// }

// function validateQ3() {
//   option1.addEventListener("click", function (e) {
//     if (e.target.innerText === questions[2].answer) {
//       console.log("This is the correct answer");
//       playerScore += 10;
//       question4();
//     } else {
//       timeLeft -= 10;
//     }
//   })
//   option2.addEventListener("click", function (e) {
//     if (e.target.innerText === questions[2].answer) {
//       console.log("This is the correct answer");
//       playerScore += 10;
//       question4();
//     } else {
//       timeLeft -= 10;
//     }
//   })
//   option3.addEventListener("click", function (e) {
//     if (e.target.innerText === questions[2].answer) {
//       console.log("This is the correct answer");
//       playerScore += 10;
//       question4();
//     } else {
//     }
//   })
//   option4.addEventListener("click", function (e) {
//     if (e.target.innerText === questions[2].answer) {
//       console.log("This is the correct answer");
//       playerScore += 10;
//       question4();
//     } else {
//       timeLeft -= 10;
//     }
//   })
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
//   option1.addEventListener("click", function (e) {
//     if (e.target.innerText === questions[3].answer) {
//       console.log("This is the correct answer");
//       playerScore += 10;
//       question5();
//     } else {
//       timeLeft -= 10;
//     }
//   })
//   option2.addEventListener("click", function (e) {
//     if (e.target.innerText === questions[3].answer) {
//       console.log("This is the correct answer");
//       playerScore += 10;
//       question5();
//     } else {
//       timeLeft -= 10;
//     }
//   })
//   option3.addEventListener("click", function (e) {
//     if (e.target.innerText === questions[3].answer) {
//       console.log("This is the correct answer");
//       playerScore += 10;
//       question5();
//     } else {
//       timeLeft -= 10;
//     }
//   })
//   option4.addEventListener("click", function (e) {
//     if (e.target.innerText === questions[3].answer) {
//       console.log("This is the correct answer");
//       playerScore += 10;
//       question5();
//     } else {
//       timeLeft -= 10;
//     }
//   })
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
//   option1.addEventListener("click", function (e) {
//     if (e.target.innerText === questions[4].answer) {
//       console.log("This is the correct answer");
//       playerScore += 10;
//     } else {
//       timeLeft -= 10;
//     }
//   })
//   option2.addEventListener("click", function (e) {
//     if (e.target.innerText === questions[4].answer) {
//       console.log("This is the correct answer");
//       playerScore += 10;
//       question2();
//     } else {
//       timeLeft -= 10;
//     }
//   })
//   option3.addEventListener("click", function (e) {
//     if (e.target.innerText === questions[4].answer) {
//       console.log("This is the correct answer");
//       playerScore += 10;

//     } else {
//       timeLeft -= 10;
//     }
//   })
//   option4.addEventListener("click", function (e) {
//     if (e.target.innerText === questions[4].answer) {
//       console.log("This is the correct answer");
//       playerScore += 10;
//     } else {
//       timeLeft -= 10;
//     }
//   })
// }



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


// WHEN the game is over
// THEN I can save my initials and score
