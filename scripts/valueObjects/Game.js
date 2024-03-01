class Game {
  constructor(ctx, player, gameMap) {
    this.isGameOver = false;
    this.gameMap = gameMap;
    this.player = player;
    this.obstacles = [];
    this.platforms = [];
    this.bugs = [];
    this.ctx = ctx;
  }
}
