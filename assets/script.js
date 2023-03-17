// Variables declared for global use
let renderQuestion = document.querySelector(".questions");
const startButton = document.querySelector("button");
const questionBank = [
    "What is HTML used for?",
    "what is CSS used for?",
    "What is Javascript used for?",
    "What is an @media query used for?",
    "What is a string?",
    "Inline, block, and flex are examples of what property?",
    "What is Full Stack development?",
    "A function inside of an object is called a(n)?",
    "How do you open ChromeDevTools?",
    "Which git command can you use to create a file?",
    "What does 'ls' do in the GitBash terminal?",
    "What does 'code .' do in the GitBash terminal?",
    "Who has two thumbs and is mediocre at coding?",
    "What is Bootstrap?",
    "How would I convert an array to a string using JSON?",
    "What does JSON stand for?",
    "What does API stand for?",
    "To center content vertically, which property should be used?",
    "What does JSON.parse do?",
    "What does math.floor do in JavaScript?",
]

//Used to test if questionBank displays properly
console.log(questionBank); 

// Function runs upon clicking startButton
function startQuiz() {

    // Sets up the timer, and decrements it each second.
    let timer = 5;
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

    // Allows a random question from the questionBank to be pulled
    function generateQuestion() {
        let question = questionBank[Math.floor(Math.random() * questionBank.length)];
        return question;
    } 
    // Calls the function so it will run
    generateQuestion();

    // Renders the randomly generated question to the screen    
    renderQuestion.textContent = generateQuestion();
}

// Allows user to click the startButton, triggering the startQuiz function
startButton.addEventListener("click", startQuiz);