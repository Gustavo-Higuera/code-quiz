// store page elements in variables
var viewScoresBtn = document.querySelector("#view-scores");
var timerEl = document.querySelector("#timer-display");
var contentEl = document.querySelector("#content");
var optionsEl = document.querySelector("#options");
var startBtn = document.querySelector("#start-btn");
// Quiz Settings
var timeGiven = 40; // initial time given to complete quiz
var timePenalty = 3; // time deducted for incorrect answer
var scorePenalty = 50; // points deducted for incorrect answer
var scoreReward = 100; // points rewarded for correct answer
var timesUpMessage = "Time's Up!"; // message to display when time runs out
var answeredAllMessage = "Excellent!"; // message to display if quiz ends because all questions were answered correctly

// setup timer
var timer = timeGiven;
var timeRemainingEl = document.querySelector("#time-remaining");
timeRemainingEl.textContent = timer;
var startTimer;

// set counters
var currentQuestionIndex = 0;
var correctAnswersCounter = 0;
var incorrectAnswersCounter = 0;
var score = 0;

// Quiz Questions
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
},
{
    question: "Which of the following is not a programming language?",
    options: ["JavaScript", "Java", "Python", "Git"],
    answer: "Git"
},
{
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"],
    answer: "Hyper Text Markup Language"
},
{
    question: "JavaScript is a ___ -side programming language.",
    options: ["Client", "Server", "Both", "None"],
    answer: "Both"
}];

// add instructions to page
var instructionsEl = document.querySelector("#instructions");
instructionsEl.textContent = "You have " + timeGiven + " seconds to answer " + questions.length + " questions.";

function startQuiz() {
    // start timer
    startTimer = setInterval(function () {
        timer--;
        timeRemainingEl.textContent = timer;
        if (timer === 0) {
            clearInterval(startTimer);
            endQuiz(timesUpMessage);
        }
    }, 1000);
    // call first question
    getQuestion();
}

function getQuestion() {
    // clear main content
    contentEl.innerHTML = "";
    optionsEl.innerHTML = "";

    // place current question in p tag and add to contentEl
    var questionEl = document.createElement("p");
    questionEl.textContent = questions[currentQuestionIndex].question;
    contentEl.appendChild(questionEl);

    // loop through current question's options and create button for each
    for (var i = 0; i < questions[currentQuestionIndex].options.length; i++) {
        var optionBtn = document.createElement("button");
        optionBtn.className = "answer-btn";
        optionBtn.textContent = questions[currentQuestionIndex].options[i];
        optionsEl.appendChild(optionBtn);
    };
}

function validateQuestion(event) {
    // check if a answer button was clicked before proceeding
    var targetEl = event.target;
    if (targetEl.matches(".answer-btn")) {
        // check if answered correctly or incorrectly
        var pickedAnswer = targetEl.textContent;
        var correctAnswer = questions[currentQuestionIndex].answer;
        if (pickedAnswer === correctAnswer) {
            // change color of button and timer
            targetEl.setAttribute("class", "correct");
            // update counters
            correctAnswersCounter++;
            score += scoreReward;
            timeRemainingEl.textContent = timer;
        } else {
            // add question back into rotation
            questions.push(questions[currentQuestionIndex]);
            // change color of button and timer
            targetEl.setAttribute("class", "incorrect");
            // update counters
            incorrectAnswersCounter++;
            score -= scorePenalty
            timer = timer - timePenalty;
            // before updating timer, check if time remaining is greater than timePenalty
            if (timer > timePenalty) {
                timer -= timePenalty;
                timeRemainingEl.textContent = timer;
            } else {
                clearInterval(startTimer);
                timer = 0;
                timeRemainingEl.textContent = timer;
            }
        };
        // update currentQuestionIndex counter
        currentQuestionIndex++;

        // pause long enough for player to see if they were correct or incorrect
        setTimeout(function () {
            // remove color from timer
            timerEl.removeAttribute("class");

            // check there is time left
            if (timer === 0) {
                endQuiz(timesUpMessage);
                // check if there are more questions to answer
            } else if (currentQuestionIndex < questions.length) {
                getQuestion();
            } else {
                endQuiz(answeredAllMessage);
            }
        }, 500);
    };
}

function endQuiz(message) {
    // stop and hidden timer
    clearInterval(startTimer);
    timerEl.setAttribute("class", "hidden");

    // clear main content
    contentEl.innerHTML = "";
    optionsEl.innerHTML = "";

    // add end quiz header
    var endHeaderEl = document.createElement("h2");
    endHeaderEl.textContent = message;
    contentEl.appendChild(endHeaderEl);

    // add player's score
    var playerScoreEl = document.createElement("h3");
    playerScoreEl.textContent = "You finished with " + score + " points!";
    contentEl.appendChild(playerScoreEl);

    // add player's detailed stats
    var playerDetailsEl = document.createElement("p");
    playerDetailsEl.textContent = "You answered " + correctAnswersCounter + " questions correctly with " + timer + " seconds remaining. You made " + incorrectAnswersCounter + " mistakes.";
    contentEl.appendChild(playerDetailsEl);

    // add instructions for player to submit name
    var namecontentEl = document.createElement("p");
    namecontentEl.textContent = "Enter your name to save your score.";
    contentEl.appendChild(namecontentEl);

    // add form for player to enter name
    var nameForm = document.createElement("form");
    var nameInput = document.createElement("input");
    var nameSubmit = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "player-name");
    nameInput.setAttribute("placeholder", "Your Name");
    nameSubmit.setAttribute("type", "submit");
    nameSubmit.setAttribute("value", "Submit");
    nameForm.appendChild(nameInput);
    nameForm.appendChild(nameSubmit);
    optionsEl.appendChild(nameForm);

    // add event listener to form
    nameForm.addEventListener("submit", function (event) {
        event.preventDefault();
        saveScore();
        viewHighScores();
    });
}

// declare scoresArr globally
var scoresArr;

function saveScore() {
    // update scoresArr
    loadScores();

    // set playerStats object properties
    var playerName = document.querySelector("input[name='player-name']").value;
    // if player leaves name blank, set name to 'Anonymous'
    if (!playerName) { playerName = "Anonymous" };
    var playerStats = {
        name: playerName,
        score: score
    };

    // push playerStats into scoresArr
    scoresArr.push(playerStats);

    // overwrite scores array in localStorage with scoresArr
    localStorage.setItem("scores", JSON.stringify(scoresArr));
}

// push scores from localStorage into scoresArr
function loadScores() {
    // reset scoresArr with scores from local storage
    scoresArr = [];
    var savedScores = localStorage.getItem("scores");

    // if there are no saved scores, return out of function
    if (!savedScores) {
        return false;
    } else {
        // parse savedScores into an array of objects
        savedScores = JSON.parse(savedScores);

        // loop through objects in savedScores and push into scoresArr
        for (var i = 0; i < savedScores.length; i++) {
            scoresArr.push(savedScores[i]);
        }
    };
}

function viewHighScores() {
    //update scoresArr
    loadScores();

    // stop and hidden timer
    clearInterval(startTimer);
    timerEl.setAttribute("class", "hidden");

    // hidden viewScoresBtn
    viewScoresBtn.setAttribute("class", "hidden");

    // clear main content
    contentEl.innerHTML = "";
    optionsEl.innerHTML = "";

    // add high scores header
    var scoresHeaderEl = document.createElement("h2");
    scoresHeaderEl.textContent = "High Scores";
    contentEl.appendChild(scoresHeaderEl);

    // setup high scores table
    var scoresTableEl = document.createElement("table");
    scoresTableEl.id = "high-scores";
    contentEl.appendChild(scoresTableEl);

    var scoresTitleRowEl = document.createElement("tr");
    scoresTableEl.appendChild(scoresTitleRowEl);

    var nameTitleEl = document.createElement("th");
    nameTitleEl.textContent = "Player Name";
    scoresTitleRowEl.appendChild(nameTitleEl);

    var scoreTitleEl = document.createElement("th");
    scoreTitleEl.textContent = "Score";
    scoresTitleRowEl.appendChild(scoreTitleEl);

    // loop through scoresArr and add tr for each score
    for (var i = 0; i < scoresArr.length; i++) {
        // create tr
        var rowEl = document.createElement("tr");
        rowEl.innerHTML = "<td>" + scoresArr[i].name + "</td><td>" + scoresArr[i].score + "</td>";
        scoresTableEl.appendChild(rowEl);
    };
}

startBtn.addEventListener("click", startQuiz);
optionsEl.addEventListener("click", validateQuestion);
viewScoresBtn.addEventListener("click", viewHighScores);