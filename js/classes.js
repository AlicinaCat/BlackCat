class Player {
    constructor(name) {
        this.name = name;
        this.credit = 50;
        this.drawnCards = [];
        this.total = 0;
    }

    start() {
        this.credit -= 10;
        let firsCard = this.draw();
        let secondCard = this.draw();

        this.calculateSum(firsCard, secondCard);

        if (this.total == 21) {
            console.log(this.name + ' has black jack!')
            gameOver = true;
        }

        return gameOver;
    }

    draw() {
        let cardIndex = Math.floor(Math.random() * 13);
        let typeIndex = Math.floor(Math.random() * 4);
        let type = types[typeIndex];
        let card = cards[cardIndex];
        console.log("the card " + card + " of " + type + " was drawn by " + this.name);

        let drawnCard = card + type;
        this.drawnCards.push(drawnCard);
        console.log("drawn card: " + drawnCard);

        return card;
    }

    calculateSum(firsCard, secondCard) {
        firsCard = this.checkCardValue(firsCard);
        secondCard = this.checkCardValue(secondCard);
        this.total = firsCard + secondCard;

        if (secondCard == 11) {
            secondCard = this.checkAceValue(secondCard, this.total);
            console.log("Ace has value " + secondCard);
        }

        console.log(this.name + "'s score is " + this.total);
    }

    checkCardValue(card) {
            if (card == 'J' || card == 'Q' || card == 'K')
                card = 10;
            else if (card == 'A')
                card = 11;
            return card;
    }

    checkAceValue(card, total) {
        if (total > 21) {
            if (card == 11)
                card = 1;
        }

        return card;
    }

    hit() {
        console.log(this.name + ' chose to hit');
        let extraCard = this.draw();
        extraCard = this.checkCardValue(extraCard);

        let tempTotal = this.total + extraCard;
        extraCard = this.checkAceValue(extraCard, tempTotal);
        this.total += extraCard;

        console.log(this.name + "'s new total is " + this.total);
        gameOver = checkGameOver();
    }

    stay() {
        console.log(this.name + ' chose to stay');
    }

    turn(choice) {
        if (choice == 1) {
            this.hit();
        } else if (choice == 2) {
            this.stay();
        }
    }
}

class Computer extends Player {
    constructor() {
    super();
    this.name = 'Computer';
    this.drawnCards = [];
    this.total = 0;
    }

    start() {
        let firsCard = this.draw();
        let secondCard = this.draw();

        this.calculateSum(firsCard, secondCard);

        if (this.total == 21) {
            console.log(this.name + ' has black jack!')
            gameOver = true;
        }

        return gameOver;
    }

    turn() {
        if (this.total < 17) {
            this.hit();
        } else {
            this.stay();
        }
    }

    hit() {
        console.log(this.name + ' chose to hit');
        let extraCard = this.draw();
        extraCard = this.checkCardValue(extraCard);

        let tempTotal = this.total + extraCard;
        extraCard = this.checkAceValue(extraCard, tempTotal);
        this.total += extraCard;

        console.log(this.name + "'s new total is " + this.total);
        showComputerExtraCard();
        gameOver = checkGameOver();
    }
}



var cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
var types = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

var gameOver = false;

