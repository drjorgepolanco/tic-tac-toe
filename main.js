var spaces = [
  NaN, NaN, NaN,
  NaN, NaN, NaN,
  NaN, NaN, NaN
]; 

var player1 = 'veggies';
var player2 = 'junkfood';
var playing = null;

function setNextTurn() {
  playing === player1 ? playing = player2 : playing = player1;
  $('#turn-label').text(playing);
};

function checkForWinner() {
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
    $(document).trigger('game-win', playing);
  }
};

$(document).on('click', '#board .space', function (e) {
  var spaceNum = $(e.currentTarget).index();
  console.log('You clicked on space #' + spaceNum);

  if (spaces[spaceNum]) {
    alert("This space has already been taken!")
  } 
  else {
    spaces[spaceNum] = playing;
    $('#board .space:eq(' + spaceNum + ')').addClass(playing);
  };

  checkForWinner();
  setNextTurn();
});

$(document).on('game-win', function (e, winner) {
  alert("The winner is " + winner + "!");
});

setNextTurn();
