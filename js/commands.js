$('#hit').click(function () {
    player.hit();
    showExtraCard();
});

$('#stay').click(function () {
    player.stay();
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
}

function showExtraCard() {
    let imgTitle = player.drawnCards[player.drawnCards.length - 1];
    let cardImage = document.createElement('img');
    cardImage.src = "pictures/classic-cards/" + imgTitle + ".png";
    console.log(imgTitle);

    $('#playerCards').append('<li></li> ').append(cardImage);
}

var player = new Player('Alicina');
player.start();

$('#credit').append("Credit: " + player.credit);

$('#playerScore').append(player.total);
//$('#computerScore').append(computerTotal);



showCards();

