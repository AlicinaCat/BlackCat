$('#hit').click(function() {
    playerTotal = player.turn(1, playerTotal);
    computerTotal = computer.turn(1, computerTotal);
});

$('#stay').click(function() {
    playerTotal = player.turn(2, playerTotal);
    end();
});