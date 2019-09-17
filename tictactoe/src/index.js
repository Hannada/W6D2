const View = require("./ttt-view");
const Game = require("../solution/game");


  $(() => {
    const $el = $('.ttt');
    const newGame = new Game(); 
    const newView = new View(newGame, $el);
    // Your code here
    }
  );
