const HanoiGame = require('../solution/game')

$(() => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
