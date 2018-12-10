var popup = document.getElementById('creditModal');
var confirm = document.getElementsByClassName("confirmButton")[0];
var text = "";
var bet = 0;

$(document).ready(function () {
    popup.style.display = "block";
    $('#creditTitle').append("(current credit: " + player.credit + ")");

    confirm.onclick = function () {
        
        text += $('#textbox').val();
        bet = parseInt(text);

        if (isNaN(bet)) {
            alert("Wrong input!");
            location.reload();
            
        } else if (bet > player.credit) {
            alert("The bet amount is bigger than the credit!");
            location.reload();
        } else {
            alert("You chose to bet: " + text);
            popup.style.display = "none";
            startGame();
        }
    }
});