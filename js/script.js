
var player = new Player('Alicina');
gameOver = player.start();

var computer = new Computer();
gameOver = computer.start();

console.log(gameOver);

$('#credit').append("Credit: " + player.credit);

$('#playerScore').append(player.total);
$('#computerScore').append(computer.total);

showCards();

function updatePlayerScore() {
    $('#playerScore').empty();
    $('#playerScore').append('Player score: ' + player.total);
}

function updateComputerScore() {
    $('#computerScore').empty();
    $('#computerScore').append('Computer score: ' + computer.total);
}

 // TODO: 
 // - fix gameover bool
 // - fix credit
 // - fix play again
 // - connect to server & database
 // - check ace value on first card 