var startButton = document.getElementById("btn");
var timeEl = document.getElementById("time-block");
var startingContentEl = document.querySelector(".content-container");
var quizEl = document.querySelector(".quiz");
var highScoresEl = document.getElementById("high-score");
var currentScoreEl = document.getElementById("current-score");
var feedbackEl = document.querySelector(".feedback");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");


// var option1 = document.getElementById("option-btn1");
// var option2 = document.getElementById("option-btn2");
// var option3 = document.getElementById("option-btn3");
// var option4 = document.getElementById("option-btn4");

var timeLeft = 120;
var playerScore = 0;

currentScoreEl.innerText = playerScore;

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
startButton.addEventListener("click", function () {
  startTimer();
  startQuiz();
});


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
  startingContentEl.classList.add("hidden");
  highScoresEl.classList.add("hidden");
  currentScoreEl.classList.remove("hidden");



  createOptions();
}

let questionNumber = 0;

function question2() {
  questionEl.innerText = questions[1].question;

  option1.innerText = questions[1].options[0];
  option2.innerText = questions[1].options[1];
  option3.innerText = questions[1].options[2];
  option4.innerText = questions[1].options[3];
  createOptions();
}

function createOptions() {
  for (let i = 0; i < questions[questionNumber].options.length; i++) {
    let btn = document.createElement("button");
    btn.id = questions[questionNumber].options[i];
    btn.className = "answer-btns hidden";
    btn.setAttribute("data-option", `${i + 1}`)

    btn.addEventListener("click", function (e) {
      e.preventDefault();

      if (e.target.innerText === questions[0].answer) {
        console.log("This is the correct answer");
        questionNumber += 1;
        question2();
      } else {
        timeLeft -= 10;
        console.log("This is the incorrect answer")
      }
    })
    btn.innerHTML = questions[questionNumber].options[i];
    console.log(btn);
    answersEl.append(btn);
  }
}

function question1() {
  questionEl.innerText = questions[0].question;
  answersEl.classList.remove("hidden");
  option1.classList.remove("hidden");
  option2.classList.remove("hidden");
  option3.classList.remove("hidden");
  option4.classList.remove("hidden");

  option1.innerText = questions[0].options[0];
  option2.innerText = questions[0].options[1];
  option3.innerText = questions[0].options[2];
  option4.innerText = questions[0].options[3];

  validateQuestion();
}

// let optionArr = [option1, option2, option3, option4];


function validateQuestion() {
  for (let i = 0; i < 4; i++) {
    let optionBtn = document.getElementById(`option-btn${i + 1}`);
    optionBtn.addEventListener("click", function (e) {
      if (e.target.innerText === questions[0].answer) {
        console.log("This is the correct answer");
        question2();
      } else {
        timeLeft -= 10;
        console.log("This is the incorrect answer")
      }
    })
  }
}

function question3() {
  questionEl.innerText = questions[2].question;

  option1.innerText = questions[2].options[0];
  option2.innerText = questions[2].options[1];
  option3.innerText = questions[2].options[2];
  option4.innerText = questions[2].options[3];
  validateQ3();
}

function validateQ3() {
  option1.addEventListener("click", function (e) {
    if (e.target.innerText === questions[2].answer) {
      console.log("This is the correct answer");
      playerScore += 10;
      question4();
    } else {
      timeLeft -= 10;
    }
  })
  option2.addEventListener("click", function (e) {
    if (e.target.innerText === questions[2].answer) {
      console.log("This is the correct answer");
      playerScore += 10;
      question4();
    } else {
      timeLeft -= 10;
    }
  })
  option3.addEventListener("click", function (e) {
    if (e.target.innerText === questions[2].answer) {
      console.log("This is the correct answer");
      playerScore += 10;
      question4();
    } else {
    }
  })
  option4.addEventListener("click", function (e) {
    if (e.target.innerText === questions[2].answer) {
      console.log("This is the correct answer");
      playerScore += 10;
      question4();
    } else {
      timeLeft -= 10;
    }
  })
}

function question4() {
  questionEl.innerText = questions[3].question;

  option1.innerText = questions[3].options[0];
  option2.innerText = questions[3].options[1];
  option3.innerText = questions[3].options[2];
  option4.innerText = questions[3].options[3];
  validateQ4();
}

function validateQ4() {
  option1.addEventListener("click", function (e) {
    if (e.target.innerText === questions[3].answer) {
      console.log("This is the correct answer");
      playerScore += 10;
      question5();
    } else {
      timeLeft -= 10;
    }
  })
  option2.addEventListener("click", function (e) {
    if (e.target.innerText === questions[3].answer) {
      console.log("This is the correct answer");
      playerScore += 10;
      question5();
    } else {
      timeLeft -= 10;
    }
  })
  option3.addEventListener("click", function (e) {
    if (e.target.innerText === questions[3].answer) {
      console.log("This is the correct answer");
      playerScore += 10;
      question5();
    } else {
      timeLeft -= 10;
    }
  })
  option4.addEventListener("click", function (e) {
    if (e.target.innerText === questions[3].answer) {
      console.log("This is the correct answer");
      playerScore += 10;
      question5();
    } else {
      timeLeft -= 10;
    }
  })
}

function question5() {
  questionEl.innerText = questions[4].question;

  option1.innerText = questions[4].options[0];
  option2.innerText = questions[4].options[1];
  option3.innerText = questions[4].options[2];
  option4.innerText = questions[4].options[3];
  validateQ5();
}

function validateQ5() {
  option1.addEventListener("click", function (e) {
    if (e.target.innerText === questions[4].answer) {
      console.log("This is the correct answer");
      playerScore += 10;
    } else {
      timeLeft -= 10;
    }
  })
  option2.addEventListener("click", function (e) {
    if (e.target.innerText === questions[4].answer) {
      console.log("This is the correct answer");
      playerScore += 10;
      question2();
    } else {
      timeLeft -= 10;
    }
  })
  option3.addEventListener("click", function (e) {
    if (e.target.innerText === questions[4].answer) {
      console.log("This is the correct answer");
      playerScore += 10;

    } else {
      timeLeft -= 10;
    }
  })
  option4.addEventListener("click", function (e) {
    if (e.target.innerText === questions[4].answer) {
      console.log("This is the correct answer");
      playerScore += 10;
    } else {
      timeLeft -= 10;
    }
  })
}



// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


// WHEN the game is over
// THEN I can save my initials and score




// Create DOM elements dynamically, for questions, and options (1 loop)
// 