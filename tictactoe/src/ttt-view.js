class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    let that = this;
    $("li").click(function(e) {
      let pos = $(e.target).data('pos');
      that.makeMove($(e.target));
      that.game.playMove(pos);
    })

  }

  makeMove($square) {
    let currentPlayer = this.game.currentPlayer;
    if (!this.game.board.isEmptyPos($square.data('pos'))) {
      alert('Cockle doodle doo!');
    } else {
      $square.toggleClass("unordered-list clicked");
      $square.append(currentPlayer);
    }
  }

  setupBoard() {
    const $ul = $('<ul>');
    $ul.addClass('unordered-list');

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        $ul.append($("<li>").addClass("list-item").data("pos", [i, j]));
      }
    }

    // $('.list-item').css({"width": "50px", "height": "50px", "background-color": "gray", "border": "5px solid black"});

    this.$el.append($ul);
  }
}

module.exports = View;
