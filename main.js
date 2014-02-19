var spaces = [
  NaN, NaN, NaN,
  NaN, NaN, NaN,
  NaN, NaN, NaN
]; 

var player1 = 'veggies';
var player2 = 'junkfood';
var currentPlayer = null;

var setNextTurn = function () {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  }
  else {
    currentPlayer = player1;
  }
  $('#turn-label').text(currentPlayer);
};

var checkForWinner = function () {
  if ( spaces[0] === spaces[1] && spaces[1] === spaces[2]
    || spaces[3] === spaces[4] && spaces[4] === spaces[5]
    || spaces[6] === spaces[7] && spaces[7] === spaces[8]
    || spaces[0] === spaces[3] && spaces[3] === spaces[6]
    || spaces[1] === spaces[4] && spaces[4] === spaces[7]
    || spaces[2] === spaces[5] && spaces[5] === spaces[8]
    || spaces[0] === spaces[4] && spaces[4] === spaces[8]
    || spaces[2] === spaces[4] && spaces[4] === spaces[6] 
  ) {
    console.log('somebody won');
    $(document).trigger('game-win', currentPlayer);
  }
};

$(document).on('click', '#board .space', function (e) {
  var spaceNum = $(e.currentTarget).index();
  console.log('You clicked on space #' + spaceNum);

  if (spaces[spaceNum]) {
    alert("This space has already been taken!")
  } else {
    spaces[spaceNum] = currentPlayer;
    $('#board .space:eq(' + spaceNum + ')').addClass(currentPlayer);
  };

  checkForWinner();
  setNextTurn();
});

$(document).on('game-win', function (e, winner) {
  alert("The winner is " + winner + "!");
});

setNextTurn();
