// Variables declared for global use
// Variables to allow for eventListeners and textContent replacements on questions and answers
let renderQuestion = document.querySelector(".questions");
let answerButtons = document.querySelector(".answers")
let renderAnswer1 = document.querySelector("#answer1");
let renderAnswer2 = document.querySelector("#answer2");
let renderAnswer3 = document.querySelector("#answer3");
let renderAnswer4 = document.querySelector("#answer4");
let startButton = document.querySelector(".startBtn");

// Objects for question/answer bank
let questionBank = [
    {
        question: "What is HTML used for?",
        answers: [
            "a: To build the structure of a webpage",
            "b: To style a webpage",
            "c: To add logic to a webpage",
            "d: To securely transfer data",
        ],
        correctAnswer: "0"
    },
    {
        question: "What is Bootstrap?",
        answers: [
            "a: Opens the current directory in VSCode",
            "b: JavaScript Object Notation",
            "c: A CSS framework for developing mobile-first websites",
            "d: git touch [your file name]",
        ],
        correctAnswer: "2"
    },
    {
        question: "What is an @media query used for?",
        answers: [
            "a: Opens the current directory in VSCode",
            "b: A method",
            "c: To apply CSS depending on the media type (screen size, print vs. screen, etc.)",
            "d: Lists the items in the current directory",
        ],
        correctAnswer: "2"
    },
    {
        question: "What is an example of a string?",
        answers: [
            "a: Opens the current directory in VSCode",
            "b: JavaScript Object Notation",
            "c: A CSS framework for developing mobile-first websites",
            "d: 'abcd'",
        ],
        correctAnswer: "3"
    },
    {
        question: "Inline, block, and flex are examples of what property?",
        answers: [
            "a: Display",
            "b: Right-click -> Inspect",
            "c: JSON.strigify([myarray])",
            "d: align-items:",
        ],
        correctAnswer: "0"
    },
    {
        question: "Who has two thumbs and is mediocre at coding?",
        answers: [
            "a: Opens the current directory in VSCode",
            "b: 👍 This guy 👍",
            "c: It converts a JSON stringified object to a JavaScript object",
            "d: It rounds a number down to the nearest whole number",
        ],
        correctAnswer: "1"
    },
    {
        question: "What does 'ls' do in the GitBash terminal?",
        answers: [ 
            "a: The development of both Front and Back End software",
            "b: git touch [your file name]",
            "c: To add logic to a webpage",
            "d: Lists the items in the current directory",
        ],
        correctAnswer: "3"
    },
    {
        question: "What does JSON.parse do?",
        answers: [
            "a: It converts a JSON stringified object to a JavaScript object",
            "b: JavaScript Object Notation",
            "c: To build the structure of a webpage",
            "d: git touch [your file name]",
        ],
        correctAnswer: "0"
    },
    {
        question: "What is CSS used for?",
        answers: [
            "a: 'abcd'",
            "b: To style a webpage",
            "c: Opens the current directory in VSCode",
            "d: Application Programming Interface",
        ],
        correctAnswer: "1"
    },
    {
        question: "What does math.floor do in JavaScript?",
        answers: [
            "a: JSON.strigify([myarray])",
            "b: It rounds a number down to the nearest whole number",
            "c: Right-click -> Inspect",
            "d: align-items:",
        ],
        correctAnswer: "1"
    }
];

// Variables to be used for timer/questions left
let timerDisplay = document.querySelector("#countdownTimer");
let timeRemaining = 30;
let questionsLeft = document.querySelector("#questionsRemaining");
let currentQ = 0;

// Variables used for score submission section
let submitScore = document.querySelector(".submitBtn");
document.querySelector(".submitBtn").disabled = true;
let viewScore = document.querySelector(".viewScores");


// --------------------- END OF GLOBAL VARIABLES -------------------------------------//


// --------------------- START OF QUIZ FUNCTIONS ------------------------------------//

// Basic timer function using setInterval to allow for penalties later
function baseTimer() {
    let timerChanges = setInterval(function () {
        timeRemaining--;
        timerDisplay.textContent = "TIME LEFT: " + timeRemaining;
        if (currentQ === questionBank.length || timeRemaining <= 0 ) {
            clearInterval(timerChanges);
            renderQuestion.textContent = "Submit Score!";
            timerDisplay.textContent = ("Score: " + timeRemaining);
            saveScore();
            document.querySelector(".submitBtn").disabled = false;
            document.querySelector(".startBtn").disabled = false;
        }
    }, 1000);
}

// Function runs upon clicking startButton
function startQuiz() {
    timeRemaining = 30;
    currentQ = 0;
    baseTimer();
    displayQuestions(currentQ);
    document.querySelector(".startBtn").disabled = true;
}

// This section generates questions and answers while the quiz is running.
function displayQuestions(currentQ) {
    if (currentQ < questionBank.length) {
        renderQuestion.textContent = questionBank[currentQ].question;   
        renderAnswer1.textContent = questionBank[currentQ].answers[0];
        renderAnswer2.textContent = questionBank[currentQ].answers[1];
        renderAnswer3.textContent = questionBank[currentQ].answers[2];
        renderAnswer4.textContent = questionBank[currentQ].answers[3];
    }
}

function rightOrWrong(event) {
    event.preventDefault();
    questionsRemaining.textContent = Math.abs(currentQ-9);
    if (questionBank[currentQ].correctAnswer === event.target.value) {
        timeRemaining = timeRemaining + 2;
    } else if (questionBank[currentQ].correctAnswer !== event.target.value) {
        timeRemaining = timeRemaining -5;
    }

    if (currentQ < questionBank.length) {
        currentQ++;
    }

    displayQuestions(currentQ);
}

function saveScore() {
    localStorage.setItem("Score", timeRemaining);
}

function saveInitials(initials) {
    localStorage.setItem("Initials", initials);
}

function storeScores(event) { 
    event.preventDefault();
    var initials = document.querySelector(".enterInitials").value;
    saveInitials(initials); 
}

function loadScores() {
    var saveScore = localStorage.getItem("Score");
    var saveInitials = localStorage.getItem("Initials");
    renderQuestion.innerHTML = saveInitials + ":  " + saveScore;
}

//
submitScore.addEventListener("click", storeScores);

//
viewScore.addEventListener("click", loadScores);

// Adds event listener so each answer can be clicked to check if right or wrong
answerButtons.addEventListener("click", rightOrWrong);

// Allows user to click the startButton, triggering the startQuiz function
startButton.addEventListener("click", startQuiz);

