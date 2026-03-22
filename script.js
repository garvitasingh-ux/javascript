// script.js

let time = 3600; // 1 hour in seconds
let timerInterval = null;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // Format MM:SS
    let display = 
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;

    document.getElementById("timer").innerText = display;
}

function startTimer() {
    if (timerInterval !== null) return; // prevent multiple timers

    timerInterval = setInterval(() => {
        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
            document.getElementById("message").innerText = "Time's up!";
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    time = 3600;
    updateDisplay();
    document.getElementById("message").innerText = "";
}

// Initialize display
updateDisplay();