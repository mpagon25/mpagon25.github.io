const startBtn = document.querySelector('#start');

const gameRunner = new GameRunner();

startBtn.addEventListener('click', () => {
  // gameRunner.initGame();
  gameRunner.gameOver();
});
