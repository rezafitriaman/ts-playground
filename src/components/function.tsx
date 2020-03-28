// Function Types

function add (x: number , y: number): number {
    return x + y
}

let myAdd = function (x: number, y: number): number {
    return x + y;
};

// Writing the function type #

let mAdd: (baseValue: number, increment: number) => number = function (x, y) {
    return x+ y ;
};

// Optional and Default Parameters #
function buildName(firstName: string, lastName: string = 'smith') {
    if (lastName)
        return firstName + " " + lastName;
    else
        return  firstName;

}

let result1 = buildName('boob');

// Rest Parameters #

function buildName1(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

//this #
/*export let deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        return  () => {
            let pickedCard = Math.floor(Math.random() * this.cards.length);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13}
        }
    }
};*/

/*let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log('card: ' + pickedCard.card + " of " + pickedCard.suit);*/

//this parameters #

/*export function f(this: void) {

}

interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    // Node : the function now explicitly that its callee must be of type Deck
    createCardPicker: function(this:Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
};*/

// this parameters in callbacks #

/*
interface UIElement {
    addClicklistener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info: string;
    onClickGood = (e: Event) => { this.info = e.message }
}

export let suits = ["hearts", "spades", "clubs", "diamonds"];

export function pickCard(x: {suit: string; card: number; }[]): number;
export function pickCard(x: number): {suit: string; card: number; };
export function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
*/
