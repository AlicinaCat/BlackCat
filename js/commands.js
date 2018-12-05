$('#hit').click(function () {
    player.turn(1);
    showPlayerExtraCard();
});

$('#stay').click(function () {
    player.turn(2);
    computer.turn();
    // $('#credit').empty();
    // $('#credit').append("Credit: " + player.credit);
    // end();

});

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

function showPlayerExtraCard() {
    let imgTitle = player.drawnCards[player.drawnCards.length - 1];
    let cardImage = document.createElement('img');
    cardImage.src = "pictures/classic-cards/" + imgTitle + ".png";
    console.log(imgTitle);

    $('#playerCards').append('<li></li> ').append(cardImage);
}

function showComputerExtraCard() {
    let imgTitle = computer.drawnCards[computer.drawnCards.length - 1];
    let cardImage = document.createElement('img');
    cardImage.src = "pictures/classic-cards/" + imgTitle + ".png";
    console.log(imgTitle);

    $('#computerCards').append('<li></li> ').append(cardImage);
}

function end() {
    if (gameOver) {
        console.log('Game over!')
    } else {
        if (player.total > 21) {
            console.log(computer.name + " won!");
        } else if (computer.total > 21) {
            console.log(player.name + " won!");
            player.credit += 20;
        } else if (player.total > computer.total) {
            console.log(player.name + " won!");
            player.credit += 20;
        } else {
            console.log(computer.name + " won!");
            computer.credit += 20;
        }
    }
}

