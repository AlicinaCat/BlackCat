var popup = document.getElementById('creditModal');
var confirm = document.getElementsByClassName("confirmButton")[0];
var text = "";
var bet = 0;

$(document).ready(function () {
    popup.style.display = "block";
    $('#creditTitle').append("(current credit: " + player.credit + ")");

    confirm.onclick = function () {
        popup.style.display = "none";
        text += $('#textbox').val();
        alert("You chose to bet: " + text);
        bet = text;
        startGame();
    }
});