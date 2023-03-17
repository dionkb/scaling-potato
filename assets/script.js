let startButton = document.querySelector("button");

function startQuiz() {
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
    timeRemaining();
}

startButton.addEventListener("click", startQuiz);