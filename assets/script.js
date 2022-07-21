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

var timeLeft = 120;
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
        }
    }, 1000);
}

function startQuiz() {
    // when the start quiz button is clicked, all of the original content on the page is being hidden
    startingContentEl.classList.add("hidden");
    scoreEl.classList.remove("hidden");
    scoreEl.innerHTML = "Current Score: 0";

    answersEl.classList.remove("hidden");
    option1.classList.remove("hidden");
    option2.classList.remove("hidden");
    option3.classList.remove("hidden");
    option4.classList.remove("hidden");

    createQuizFormat();
}

var currentQuestionIndex = 0;
var maxQuestionsIndex = 5;

function createQuizFormat() {
    questionEl.innerText = questions[currentQuestionIndex].question;
    option1.innerText = questions[currentQuestionIndex].options[0];
    option2.innerText = questions[currentQuestionIndex].options[1];
    option3.innerText = questions[currentQuestionIndex].options[2];
    option4.innerText = questions[currentQuestionIndex].options[3];

    validateAnswer(questions[currentQuestionIndex].answer);

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
                incorrectFeedback();
                timeLeft - 10;
            }

            if (currentQuestionIndex === maxQuestions) {
                return endGame();
            } else {
                return createQuizFormat();
            }
        })
        console.log(currentQuestionIndex);
    }
}

function correctFeedback() {
    var correctMessage = "You answered the last question CORRECT! +1 point.";
    feedbackEl.innerText = correctMessage;
}

function incorrectFeedback() {
    var incorrectMessage = "You answered the last question INCORRECT!";
    feedbackEl.innerText = incorrectMessage;
}

function endGame() {
    quizEl.style.display = "none";
    timeLeft = 0;

    var quizOverEl = document.getElementById("quiz-over");
    quizOverEl.innerText = "Game Over!";

    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.innerText = `Your final score is: ${score}`;

    var nameInput = prompt("Please enter your name to save your score");
    var savedScoreEl = document.createElement("li");
    savedScoreEl.textContent = `${nameInput}: ${score}`;
    highScoresEl.innerText = "High Scores:"
    highScoresEl.appendChild(savedScoreEl);

}

