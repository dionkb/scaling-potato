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

// Function runs upon clicking startButton
function startQuiz() {

    // Sets up the timer, and decrements it each second.
    function timer() {
        timeRemaining--;
        if (timeRemaining > 0){
        document.getElementById("countdownTimer").innerHTML = " " + timeRemaining;
        setTimeout(timer, 1000);
        }
        else {
            document.getElementById("countdownTimer").innerHTML = " 0";
        }
    }
    // Calls the function so it will run
    timeRemaining();

    // This section generates questions and answers while the quiz is running.
    function displayQuestions() {

        // Allows a question from the questionBank to be pulled
        function generateQuestion() {
            for (currentQ; currentQ < questionBank.length;) {
            let question = questionBank[currentQ].question;
            return question;
            }   
        }

        // Renders the generated question to the screen
        renderQuestion.textContent = generateQuestion();

        function generateAnswer() {
            for (currentQ; currentQ < questionBank.length;) {
            let answer = questionBank[currentQ].answers;
            return answer;
            }   
        }

        // Renders the generated answers to the screen    
        renderAnswer1.textContent = generateAnswer().a;
        renderAnswer2.textContent = generateAnswer().b;
        renderAnswer3.textContent = generateAnswer().c;
        renderAnswer4.textContent = generateAnswer().d;

        // Adds event listeners so each answer can be clicked to go to next question
        renderAnswer1.addEventListener("click", displayQuestions);
        renderAnswer2.addEventListener("click", displayQuestions);
        renderAnswer3.addEventListener("click", displayQuestions);
        renderAnswer4.addEventListener("click", displayQuestions);

        function checkCorrect(event) {
            event.preventDefault();
            if (questionBank[currentQ].correctAnswer === event.target.value) {
                timer = timer + 5;
            } else if (questionBank[currentQ].correctAnswer !== event.target.value) {
                timer = timer - 10;
            }
        
            if (currentQ < questionBank.length) {
                currentQ++;
            }
        }

        answerButtons.addEventListener('click', checkCorrect);
    }
    displayQuestions(currentQ);
}

// Allows user to click the startButton, triggering the startQuiz function
startButton.addEventListener("click", startQuiz);

