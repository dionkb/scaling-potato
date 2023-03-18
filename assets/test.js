// Variables declared for global use
// Variables to allow for eventListeners and textContent replacements on questions and answers
let renderQuestion = document.querySelector(".questions");
let answerButtons = document.querySelector(".answer")
let renderAnswer1 = document.querySelector("#answer1");
let renderAnswer2 = document.querySelector("#answer2");
let renderAnswer3 = document.querySelector("#answer3");
let renderAnswer4 = document.querySelector("#answer4");
let startButton = document.querySelector(".startBtn");
let questionsRemaining = document.querySelector("#questionsRemaining");
let currentQ = 0;

// Objects for question/answer bank
let questionBank = [
    {
        question: "What is HTML used for?",
        answers: {
            a: "To build the structure of a webpage",
            b: "To style a webpage",
            c: "To add logic to a webpage",
            d: "To securely transfer data",
        },
        correctAnswer: 'a'
    },
    {
        question: "What is CSS used for?",
        answers: {
            a: "To securely transfer data",
            b: "To build the structure of a webpage",
            c: "To style a webpage",
            d: "To add logic to a webpage", 
        },
        correctAnswer: 'c'
    },
    {
        question: "What is Javascript used for?",
        answers: {
            a: "To add logic to a webpage",
            b: "To securely transfer data",
            c: "To build the structure of a webpage",
            d: "To style a webpage",
        },
        correctAnswer: 'a'
    },
    {
        question: "What is Bootstrap?",
        answers: {
            a: "Opens the current directory in VSCode",
            b: "JavaScript Object Notation",
            c: "A CSS framework for developing mobile-first websites",
            d: "git touch [your file name]",
        },
        correctAnswer: 'c'
    },
];

// Variables to be used for timer
let timerDisplay = document.querySelector("#countdownTimer");
let timeRemaining = 30;

// --------------------- END OF GLOBAL VARIABLES -------------------------------------//


// --------------------- START OF QUIZ FUNCTIONS ------------------------------------//

// Basic timer function using setInterval to allow for penalties later
function baseTimer() {
    let timerChanges = setInterval(function () {
        timeRemaining--;
        timerDisplay.textContent = timeRemaining;
        if (currentQ === 10 || timeRemaining === 0 ) {
            clearInterval(timerChanges);
            renderQuestion.textContent = "FINISHED!";
            renderAnswer1.display = "hidden";
            renderAnswer2.display = "hidden";
            renderAnswer3.display = "hidden";
            renderAnswer4.display = "hidden";
        }
    }, 1000);
}

// This section generates questions and answers while the quiz is running.
function displayQuestions(currentQ) {
    if (currentQ < questionBank.length) {
        renderQuestion.textContent = questionBank[currentQ].question;   
        renderAnswer1.textContent = questionBank[currentQ].answers.a;
        renderAnswer2.textContent = questionBank[currentQ].answers.b;
        renderAnswer3.textContent = questionBank[currentQ].answers.c;
        renderAnswer4.textContent = questionBank[currentQ].answers.d;
    }
}

// Function runs upon clicking startButton
function startQuiz() {
    questionsRemaining = 10;
    baseTimer();
    displayQuestions(currentQ);
}

    // // Allows a question from the questionBank to be pulled
    // function generateQuestion() {
    //     for (currentQ; currentQ < questionBank.length;) {
    //     let question = questionBank[currentQ].question;
    //     return question;
    //     }   
    // }

    // function generateAnswer() {
    //     for (currentQ; currentQ < questionBank.length;) {
    //     let answer = questionBank[currentQ].answers;
    //     return answer;
    //     }   
    // }

    // // Adds event listeners so each answer can be clicked to go to next question
    // renderAnswer1.addEventListener("click", displayQuestions);
    // renderAnswer2.addEventListener("click", displayQuestions);
    // renderAnswer3.addEventListener("click", displayQuestions);
    // renderAnswer4.addEventListener("click", displayQuestions);

    // function checkCorrect(event) {
    //     event.preventDefault();
    //     if (questionBank[currentQ].correctAnswer === event.target.value) {
    //         timer = timer + 5;
    //     } else if (questionBank[currentQ].correctAnswer !== event.target.value) {
    //         timer = timer - 10;
    //     }
        
    //     if (currentQ < questionBank.length) {
    //         currentQ++;
    //     }
    // }

    // answerButtons.addEventListener('click', checkCorrect);

// Allows user to click the startButton, triggering the startQuiz function
startButton.addEventListener("click", startQuiz);

