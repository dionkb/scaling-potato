// Variables declared for global use
// Variables to allow for eventListeners and textContent replacements
let renderQuestion = document.querySelector(".questions");
let renderAnswer1 = document.querySelector("#answer1");
let renderAnswer2 = document.querySelector("#answer2");
let renderAnswer3 = document.querySelector("#answer3");
let renderAnswer4 = document.querySelector("#answer4");
let startButton = document.querySelector(".startBtn");
let currentQ = -1;

// Variables for question/answer banks and used question/answer banks
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
            a: "To build the structure of a webpage",
            b: "To style a webpage",
            c: "To add logic to a webpage",
            d: "To securely transfer data",
        },
        correctAnswer: 'b'
    },
    {
        question: "What is Javascript used for?",
        answers: {
            a: "To build the structure of a webpage",
            b: "To style a webpage",
            c: "To add logic to a webpage",
            d: "To securely transfer data",
        },
        correctAnswer: 'c'
    },
    {
        question: "What is Bootstrap?",
        answers: {
            a: "Opens the current directory in VSCode",
            b: "JavaScript Object Notation",
            c: "A CSS framework for developing mobile-first websites",
            d: "git touch [your file name]",
        }
    },
];

// Function runs upon clicking startButton
function startQuiz() {

    // Sets up the timer, and decrements it each second.
    let timer = 30;
    function timeRemaining() {
        timer--;
        if (timer > 0){
        document.getElementById("countdownTimer").innerHTML = " " + timer;
        setTimeout(timeRemaining, 1000);
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
            currentQ++;
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

    }

    // Calls the function so it will run
    displayQuestions();
}




// Allows user to click the startButton, triggering the startQuiz function
startButton.addEventListener("click", startQuiz);