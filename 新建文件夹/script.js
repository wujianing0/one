// script.js

let secretNumber;
let attempts = 0;

// 初始化游戏
function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; // 生成1到100之间的随机数
    attempts = 0;
    document.getElementById("feedback").innerText = "";
    document.getElementById("playAgain").style.display = "none";
    document.getElementById("guessInput").value = "";
}

// 提交猜测
function submitGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById("feedback").innerText = "请输入一个1到100之间的数字！";
        return;
    }

    if (guess === secretNumber) {
        document.getElementById("feedback").innerText = `恭喜你！猜对了！你用了 ${attempts} 次尝试。`;
        document.getElementById("playAgain").style.display = "inline-block";
    } else if (guess < secretNumber) {
        document.getElementById("feedback").innerText = "猜的数字太小了！再试试吧。";
    } else {
        document.getElementById("feedback").innerText = "猜的数字太大了！再试试吧。";
    }
}

// 再次玩
document.getElementById("submitGuess").addEventListener("click", submitGuess);
document.getElementById("playAgain").addEventListener("click", startGame);

// 初始化游戏
startGame();
