class Player {
    constructor(name) {
        this.name = name;
        this.credit = 0;
    }

    start() {
        let firstCard = this.draw();
        let secondCard = this.draw();
        let total = this.calculateSum(firstCard, secondCard);
        return total;
    }

    turn(choice, total) {
        gameOver = this.blackJack(total);

        if (!gameOver) {
            switch (choice) {
                case 1:
                    total = this.hit(total);
                    break;
                case 2:
                    this.stay();
                    break;
            }
        }
        return total;
    }

    blackJack(total) {

        switch (true) {
            case (total == 21):
                console.log(this.name + ' won!');
                return gameOver = true;
            default:
                console.log('Wanna hit or stay?');
                return gameOver = false;
        }
    }

    checkCardValue(card) {
        if (card == 'J' || card == 'Q' || card == 'K')
            card = 10;
        else if (card == 'A')
            card = 11;
        return card;
    }

    calculateSum(firstCard, secondCard) {
        firstCard = this.checkCardValue(firstCard);
        secondCard = this.checkCardValue(secondCard);
        let total = firstCard + secondCard;

        if (secondCard == 11) {
            secondCard = this.checkAceValue(total, secondCard);
            console.log("Ace has value " + secondCard);
        }

        console.log(this.name + "'s total is " + total);
        return total;
    }

    checkAceValue(total, card) {
        if (total > 21) {
            if (card == 11)
                card = 1;
        }

        return card;
    }

    draw() {
        let cardIndex = Math.floor(Math.random() * 13);
        let typeIndex = Math.floor(Math.random() * 4);
        let type = types[typeIndex];
        let card = cards[cardIndex];
        console.log("the card " + card + " of " + type + " was drawn by " +
            this.name);
        return card;
    }

    hit(total) {
        let extraCard = this.draw();
        console.log(this.name + " has drawn the extra card " + extraCard);
        extraCard = this.checkCardValue(extraCard);
        total += extraCard;
        if (extraCard == 11) {
            extraCard = this.checkAceValue(total, extraCard);
            if (extraCard == 1) {
                total -= 11;
                total += extraCard;
            }
            console.log("Ace has value " + extraCard);

        }
        console.log("The new total is " + total);
        return total;
    }

    stay() {
        console.log('You chose to stay');
    }
}

class Computer extends Player {
    constructor() {
        super();
        this.name = 'Computer';
    }
}

function end() {
    if (playerTotal > 21) {
        console.log(computer.name + " won!");
    } else if (computerTotal > 21) {
        console.log(player.name + " won!");
    } else if (playerTotal > computerTotal) {
        console.log(player.name + " won!");
    } else {
        console.log(computer.name + " won!");
    }

    gameOver = true;

    console.log("final player total : " + playerTotal);
    console.log("final computer total : " + computerTotal);
}

var gameOver = false;

var cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
var types = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

var player = new Player('Alicina');
console.log("Player 1 name is " + player.name + ", credit $" + player.credit);

var computer = new Computer();
console.log("Player 2 name is " + computer.name + ", credit $" + player.credit);

var playerTotal = player.start();
var computerTotal = computer.start();
playerTotal = player.turn(1, playerTotal);
computerTotal = computer.turn(1, computerTotal);

end();