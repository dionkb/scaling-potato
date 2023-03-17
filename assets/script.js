let startButton = document.querySelector("button");

// Added this prompt function to test addEventListener on button
function startQuiz() {
    alert("TEST!");
};

startButton.addEventListener("click", startQuiz);