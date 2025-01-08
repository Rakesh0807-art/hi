let score = 0;
let currentQuestion = "";
let isAlphabetGame = false;

function startAlphabetGame() {
    isAlphabetGame = true;
    currentQuestion = generateRandomLetter();
    showGameArea(`What comes after "${currentQuestion}"?`);
}

function startNumberGame() {
    isAlphabetGame = false;
    currentQuestion = generateRandomNumber();
    showGameArea(`What comes after ${currentQuestion}?`);
}

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function showGameArea(question) {
    document.getElementById("game-area").textContent = question;
    document.getElementById("input-area").style.display = "block";
    document.getElementById("result").textContent = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toUpperCase();
    let correctAnswer;

    if (isAlphabetGame) {
        correctAnswer = String.fromCharCode(currentQuestion.charCodeAt(0) + 1);
    } else {
        correctAnswer = (parseInt(currentQuestion) + 1).toString();
    }

    if (userAnswer === correctAnswer) {
        document.getElementById("result").textContent = "Correct! Great job!";
        score++;
    } else {
        document.getElementById("result").textContent = `Oops! The correct answer was ${correctAnswer}.`;
    }

    if (score >= 5) {
        showScorePage();
    }
}

function showScorePage() {
    document.getElementById("input-area").style.display = "none";
    document.getElementById("score-page").style.display = "block";
    document.getElementById("score-display").textContent = `Your Score: ${score}`;
    updateLeaderboard();
}

function updateLeaderboard() {
    const leaderboard = document.getElementById("leaderboard");
    const playerScore = `Player: ${score}`;
    const listItem = document.createElement("li");
    listItem.textContent = playerScore;
    leaderboard.appendChild(listItem);
    document.getElementById("rank-page").style.display = "block";
}

function resetGame() {
    score = 0;
    document.getElementById("score-page").style.display = "none";
    document.getElementById("rank-page").style.display = "none";
}
