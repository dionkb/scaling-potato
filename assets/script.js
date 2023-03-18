// Variables declared for global use
let renderQuestion = document.querySelector(".questions");
let renderAnswer1 = document.querySelector(".answer1");
let renderAnswer2 = document.querySelector(".answer2");
let renderAnswer3 = document.querySelector(".answer3");
let renderAnswer4 = document.querySelector(".answer4");
const startButton = document.querySelector("button");
const questionBank = [
    "What is HTML used for?",
    "what is CSS used for?",
    "What is Javascript used for?",
    "What is an @media query used for?",
    "What is an example of a string?",
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
    "To center flex content vertically, which property should be used?",
    "What does JSON.parse do?",
    "What does math.floor do in JavaScript?",
]
const answerBank = [
    "To build the structure of a webpage",
    "To style a webpage",
    "To add logic to a webpage",
    "To apply CSS depending on the media type (screen size, print vs. screen, etc.)",
    "'abcd'",
    "Display",
    "The development of both Front and Back End software",
    "A method",
    "Right-click -> Inspect",
    "git touch [your file name]",
    "Lists the items in the current directory",
    "Opens the current directory in VSCode",
    "👍 This guy 👍",
    "A CSS framework for developing mobile-first websites",
    "JSON.strigify([myarray])",
    "JavaScript Object Notation",
    "Application Programming Interface",
    "align-items:",
    "It converts a JSON stringified object to a JavaScript object",
    "It rounds a number down to the nearest whole number",
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

    // Allows a random answer from the answerBank to be pulled
    function generateAnswer() {
        let answer = answerBank[Math.floor(Math.random() * answerBank.length)];
        return answer;
    }
    
    // Calls the function so it will run
    generateAnswer();

    // Renders the randomly generated question and answers to the screen    
    renderQuestion.textContent = generateQuestion();
    renderAnswer1.textContent = generateAnswer();
    renderAnswer2.textContent = generateAnswer();
    renderAnswer3.textContent = generateAnswer();
    renderAnswer4.textContent = generateAnswer();
}

// Allows user to click the startButton, triggering the startQuiz function
startButton.addEventListener("click", startQuiz);