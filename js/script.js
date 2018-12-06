// Basic methods that act as main script 

//$(document).ready(creditPopup);

var player = new Player('Alicina');
var computer = new Computer();

function startGame() {

gameOver = player.start();

gameOver = computer.start();

console.log(gameOver);

$('#credit').append("Credit: " + player.credit);

$('#playerScore').append(player.total);
$('#computerScore').append(computer.total);

showCards();
}

function updatePlayerScore() {
    $('#playerScore').empty();
    $('#playerScore').append('Player score: ' + player.total);
}

function updateComputerScore() {
    $('#computerScore').empty();
    $('#computerScore').append('Computer score: ' + computer.total);
}

function playAgain() {
    $('#buttons').append('<h2 id="playAgain">Wanna play again? </h2>');
    $('#playAgain').append('<a id ="yes" href="">Yes</a> ');
    $('#playAgain').append('<a id="no" href="../credits.html">No</a>');

    $('#yes').click(function() {
        location.reload();
    });
}
 // TODO: 
 // - fix gameover bool
 // - fix credit
 // - connect to server & database
 // - (check ace value on first card) 