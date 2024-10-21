const choices = ['rock', 'paper', 'scissors'];
let scoreWin = 0, scoreLoss = 0, scoreTie = 0;
let autoPlayStatus = false, autoPlayInterval;

const gameResultElement = document.getElementById('game-result');
const scoreElement = document.querySelector('.score');

const updateScoreboard = () => {
    scoreElement.innerHTML = `Wins: ${scoreWin}, Losses: ${scoreLoss}, Ties: ${scoreTie}`;
};

const playGame = userChoice => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('your-choice-icon').innerHTML = `<img src="${userChoice}.png" alt="${userChoice}" class="small-icon">`;
    document.getElementById('computer-choice-icon').innerHTML = `<img src="${computerChoice}.png" alt="${computerChoice}" class="small-icon">`;
    document.querySelector('.final-result').style.display = 'block';

    const result = userChoice === computerChoice ? 'Tie!' :
                   (userChoice === 'rock' && computerChoice === 'scissors') ||
                   (userChoice === 'paper' && computerChoice === 'rock') ||
                   (userChoice === 'scissors' && computerChoice === 'paper') ? 'Win!' : 'Lose!';

    gameResultElement.textContent = result;
    result === 'Win!' ? scoreWin++ : result === 'Lose!' ? scoreLoss++ : scoreTie++;
    updateScoreboard();
};

const reset = () => {
    scoreWin = scoreLoss = scoreTie = 0;
    updateScoreboard();
};

const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];

const autoPlay = () => {
    autoPlayInterval = setInterval(() => playGame(getRandomChoice()), 100);
};

const stopAutoPlay = () => clearInterval(autoPlayInterval);

const autoPlayButtonSwitch = () => {
    autoPlayStatus ? stopAutoPlay() : autoPlay();
    autoPlayStatus = !autoPlayStatus;
};

// 添加点击事件监听器
['rock', 'paper', 'scissors'].forEach(choice => {
    document.getElementById(choice).addEventListener('click', () => playGame(choice));
});