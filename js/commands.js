$('#hit').click(function () {
    playerTotal = player.turn(1, playerTotal);
    computerTotal = computer.turn(1, computerTotal);
});

$('#stay').click(function () {
    playerTotal = player.turn(2, playerTotal);
    $('#credit').empty();
    $('#credit').append("Credit: " + player.credit);
    end();

});

$('#credit').append("Credit: " + player.credit);

function showCards() {
    for (var card of player.drawnCards) {
        console.log(card);
        let cardImage = document.createElement("img");
        cardImage.src = "pictures/classic-cards/" + card + ".png";
        $('#playerCards').append('<li></li> ').append(cardImage);
    }
    for (var card of computer.drawnCards) {
        console.log(card);
        let cardImage = document.createElement("img");
        cardImage.src = "pictures/classic-cards/" + card + ".png";
        $('#computerCards').append('<li></li> ').append(cardImage);
    }
}

showCards();

