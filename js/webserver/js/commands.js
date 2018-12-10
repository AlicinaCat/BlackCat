// Graphics - buttons and card pictures methods

$('#hit').click(function () {
    player.turn(1);
    showPlayerExtraCard();
});

$('#stay').click(function () {
    player.turn(2);
    computer.turn();
    end();
    removeButtons();
});

function showCards() {
    for (var card of player.drawnCards) {
        console.log(card);
        let cardImage = document.createElement("img");
        cardImage.src = "pictures/classic-cards/" + card + ".png";
        $('#playerCards').append('<li></li> ').append(cardImage);
    }
}

function showComputerCards() {
    var firstCard = computer.drawnCards[0];
    console.log(firstCard);
    let cardImage = document.createElement("img");
    cardImage.src = "pictures/classic-cards/" + firstCard + ".png";
    $('#computerCards').append('<li></li> ').append(cardImage);

    let secondCardImage = document.createElement("img");
    secondCardImage.src = "pictures/classic-cards/flipped.png";
    secondCardImage.id = "hiddenCard";
    $('#computerCards').append('<li></li> ').append(secondCardImage);
}

function showPlayerExtraCard() {
    let imgTitle = player.drawnCards[player.drawnCards.length - 1];
    let cardImage = document.createElement('img');
    cardImage.src = "pictures/classic-cards/" + imgTitle + ".png";
    console.log(imgTitle);

    $('#playerCards').append('<li></li> ').append(cardImage);
}

function showHiddenCard() {
    $('#hiddenCard').remove();

    let imgTitle = computer.drawnCards[1];
    let cardImage = document.createElement('img');
    cardImage.src = "pictures/classic-cards/" + imgTitle + ".png";
    console.log(imgTitle);

    $('#computerCards').append('<li></li> ').append(cardImage);
}

function showComputerExtraCard() {
    let imgTitle = computer.drawnCards[computer.drawnCards.length - 1];
    let cardImage = document.createElement('img');
    cardImage.src = "pictures/classic-cards/" + imgTitle + ".png";
    console.log(imgTitle);

    $('#computerCards').append('<li></li> ').append(cardImage);
}

// Interface that handles the end of the game

function checkGameOver() {
    if (gameOver) {
        console.log('Game over!')
    } else {
        if (computer.total < 17) {
            gameOver = false;
        } else if (player.total > 21) {
            console.log(computer.name + " won!");
            gameOver = true;
        } else if (computer.total > 21) {
            console.log(player.name + " won!");
            player.credit += (bet * 2);
            updatePlayerCredit();
            console.log("Credit: " + player.credit);
            gameOver = true;
        }
    }

    console.log("Game over: " + gameOver);

    return gameOver;
}

function end() {

    showHiddenCard();
    $('#computerScore').show();

    while (computer.total < 17) {
        computer.turn();
    }

    if (!gameOver) {

        if (player.total > computer.total) {
            console.log(player.name + " won!");
            player.credit += (bet * 2);
            console.log("Credit: " + player.credit);
            updatePlayerCredit();
            gameOver = true;
        } else if (player.total < computer.total) {
            console.log(computer.name + " won!");
            gameOver = true;
        } else {
            console.log(player.name + " won!");
            player.credit += (bet * 2);
            console.log("Credit: " + player.credit);
            updatePlayerCredit();
            gameOver = true;
        }
    }

    playAgain();
}

function removeButtons() {
    $('#hit').remove();
    $('#stay').remove();
}
