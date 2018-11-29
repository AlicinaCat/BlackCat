class Player {
    constructor(name) {
        this.name = name;
        this.credit = 0;
    }   

    draw() {
        let cardIndex = Math.floor(Math.random() * 13);
        let typeIndex = Math.floor(Math.random() * 4);
        let type = types[typeIndex];
        let card = cards[cardIndex];
        console.log("the card " + card + " of "  + type + " was drawn by " + 
        this.name);
    }

    hit() {

    }

    stay() {

    }
}

class Compute extends Player {
    constructor() {
        super();
        this.name = 'Computer';
    }
}

var cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
var types = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];

var player = new Player('Alicina');
console.log("Player 1 name is " + player.name + ", credit $" + player.credit);

player.draw();