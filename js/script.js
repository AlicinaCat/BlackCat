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
        let gameOver = this.gameOver(total);
        
        if (!gameOver) {
            switch (choice) {
                case 1:
                    this.hit();
                    break;
                case 2:
                    this.stay();
                    break;
            }
        }
    }

    gameOver(total) {
        let gameOver;

        switch (true) {
            case (total == 21):
                console.log(this.name + " won!");
                return gameOver = true;
            case (total > 21):
                console.log('You lost!');
                return gameOver = true;
            case (total < 21):
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

        if (total > 21) {
            if (firstCard == 11)
                firstCard = 1;
            else if (secondCard == 11)
                secondCard = 1;
        }

        console.log(this.name + "'s total is " + total);
        return total;
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

    hit() {
        let extraCard = this.draw();
        console.log(this.name + " has drawn the extra card " + extraCard);
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

var cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
var types = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

var player = new Player('Alicina');
console.log("Player 1 name is " + player.name + ", credit $" + player.credit);

var computer = new Computer();
console.log("Player 2 name is " + computer.name + ", credit $" + player.credit);

var playerTotal = player.start();
player.turn(1, playerTotal);
computer.draw();


