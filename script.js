const choices = ['rock', 'paper', 'scissors'];
const userChoiceElement = document.getElementById('user-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const gameResultElement = document.getElementById('game-result');

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    // userChoiceElement.textContent = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    // computerChoiceElement.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    
    document.getElementById('your-choice-icon').innerHTML = `<img src="${userChoice}.png" alt="${userChoice}" class="small-icon">`;
    document.getElementById('computer-choice-icon').innerHTML = `<img src="${computerChoice}.png" alt="${computerChoice}" class="small-icon">`;

    document.querySelector('.final-result').style.display = 'block';

    // 结果判断
    if (userChoice === computerChoice) {
        gameResultElement.textContent = 'Tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        gameResultElement.textContent = 'Win!';
    } else {
        gameResultElement.textContent = 'Lose!';
    }
}

// 为每个图标添加事件监听器
document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));






