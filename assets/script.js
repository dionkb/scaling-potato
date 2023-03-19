// Variables declared for global use
// Variables to allow for eventListeners and textContent replacements on questions and answers
let renderQuestion = document.querySelector(".questions");
let answerButtons = document.querySelector(".answers")
let renderAnswer1 = document.querySelector("#answer1");
let renderAnswer2 = document.querySelector("#answer2");
let renderAnswer3 = document.querySelector("#answer3");
let renderAnswer4 = document.querySelector("#answer4");
let startButton = document.querySelector(".startBtn");

// Objects for question/answer bank along with key for correct answer to match with
// selected answers id# from html
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
let topScores = [];
let submitScore = document.querySelector(".submitBtn");
document.querySelector(".submitBtn").disabled = true;
let viewScore = document.querySelector(".viewScores");

// --------------------- END OF GLOBAL VARIABLES -------------------------------------//




// --------------------- START OF QUIZ FUNCTIONS ------------------------------------//

// Basic timer function using setInterval to allow for penalties later. Timer decrements
// by approx 1 per sec.
function baseTimer() {
    let timerChanges = setInterval(function () {
        timeRemaining--;
        timerDisplay.textContent = "TIME LEFT: " + timeRemaining;
        //Checks if time = 0 or if questions are all answered, and ends game.
        // Also takes time remaining and uses that as score. Allows user to submit score.
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

// Function runs upon clicking startButton. Resets time and question status.
// Starts timer and loads first question. Disables start button until quiz finishes.
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

// This takes the chosen answer id# and compares it to the key for the correct answer.
// If right, award time (points), if wrong, penalize.
function rightOrWrong(event) {
    event.preventDefault();
    questionsRemaining.textContent = Math.abs(currentQ-9);
    if (questionBank[currentQ].correctAnswer === event.target.value) {
        timeRemaining = timeRemaining + 2;
    } else if (questionBank[currentQ].correctAnswer !== event.target.value) {
        timeRemaining = timeRemaining -5;
    }
    // Increment current question count after answering each question
    if (currentQ < questionBank.length) {
        currentQ++;
    }
    // Restarts display question function to show new q/a based on incremented currentQ
    displayQuestions(currentQ);
}

// Allows user to enter initials and submit score (based on time remaining). The score
// is then compared with other attempts from local storage, and sorted from best to worst.
function storeScores(event) { 
    event.preventDefault();
    var initials = document.querySelector(".enterInitials").value;
    var score = timeRemaining;
    topScores.push({name: initials, yourScore: score});
    topScores = topScores.sort((a, b) => {
        if (a.score < b.score) {
            return 1;
        } else {
            return -1;
        }
        });
    saveScore(); 
}

// Takes the array of initials/scores and makes them an object to store locally.
function saveScore() {
    localStorage.setItem("highScores", JSON.stringify(topScores));
}

// Pulls from localStorage, converts back to array.
function loadScores() {
    var leaderboard = JSON.parse(localStorage.getItem("highScores"));
    // Ensures the localStorage won't be overwritten by a null topScores array upon refresh
    if (leaderboard !== null) {
        topScores = leaderboard;
        console.log(leaderboard);
    };
    // Displays the Highest Scorer based on previously sorted array 
    renderQuestion.textContent = "High Score: " + leaderboard[0].name + ": " + leaderboard[0].yourScore;
}

// Allows submit button to be clicked to start storeScores function when quiz is done.
submitScore.addEventListener("click", storeScores);

// Allows view score button to be clicked to start loadScores function to show score to beat.
viewScore.addEventListener("click", loadScores);

// Adds event listener so each answer can be clicked to check if right or wrong
answerButtons.addEventListener("click", rightOrWrong);

// Allows user to click the startButton, triggering the startQuiz function
startButton.addEventListener("click", startQuiz);

