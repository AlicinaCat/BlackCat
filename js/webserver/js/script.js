// Basic methods that act as main script 

var player;
var computer;

$(document).ready(function () {
    player = new Player('Alicina');
    computer = new Computer();
});

function startGame() {

    gameOver = player.start();

    gameOver = computer.start();

    console.log(gameOver);

    $('#credit').append("Credit: " + player.credit);

    $('#playerScore').append(player.total);
    $('#computerScore').append(computer.total).hide();;

    showCards();
    showComputerCards();
}

function updatePlayerScore() {
    $('#playerScore').empty();
    $('#playerScore').append('Player score: ' + player.total);
}

function updateComputerScore() {
    $('#computerScore').empty();
    $('#computerScore').append('Computer score: ' + computer.total);
}


function updatePlayerCredit() {
    $('#credit').empty();
    $('#credit').append('Credit: ' + player.credit);
}

function playAgain(finaltext) {
    $('#buttons').append('<p id="finaltext">' + finaltext + ' </p>');
    $('#finaltext').append('<p><a id ="yes" href="">Play Again</a></p>');

    $('#yes').click(function () {
        location.reload();
    });
}

 // TODO: 
 // - fix style
 // - fix credits 
 // - (check ace value on first card) 