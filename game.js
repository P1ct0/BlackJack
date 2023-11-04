// Create an array with full deck of cards:
var deckOfCards = [
    {ID: "HA", Suit: "Hearts", Name: "Ace", Value: 1, isAce: true},
    {ID: "H2", Suit: "Hearts", Name: "Two", Value: 2, isAce: false},
    {ID: "H3", Suit: "Hearts", Name: "Three", Value: 3, isAce: false},
    {ID: "H4", Suit: "Hearts", Name: "Four", Value: 4, isAce: false},
    {ID: "H5", Suit: "Hearts", Name: "Five", Value: 5, isAce: false},
    {ID: "H6", Suit: "Hearts", Name: "Six", Value: 6, isAce: false},
    {ID: "H7", Suit: "Hearts", Name: "Seven", Value: 7, isAce: false},
    {ID: "H8", Suit: "Hearts", Name: "Eight", Value: 8, isAce: false},
    {ID: "H9", Suit: "Hearts", Name: "Nine", Value: 9, isAce: false},
    {ID: "H10", Suit: "Hearts", Name: "Ten", Value: 10, isAce: false},
    {ID: "HJ", Suit: "Hearts", Name: "Jack", Value: 10, isAce: false},
    {ID: "HQ", Suit: "Hearts", Name: "Queen", Value: 10, isAce: false},
    {ID: "HK", Suit: "Hearts", Name: "King", Value: 10, isAce: false},
    {ID: "DA", Suit: "Diamonds", Name: "Ace", Value: 1, isAce: true},
    {ID: "D2", Suit: "Diamonds", Name: "Two", Value: 2, isAce: false},
    {ID: "D3", Suit: "Diamonds", Name: "Three", Value: 3, isAce: false},
    {ID: "D4", Suit: "Diamonds", Name: "Four", Value: 4, isAce: false},
    {ID: "D5", Suit: "Diamonds", Name: "Five", Value: 5, isAce: false},
    {ID: "D6", Suit: "Diamonds", Name: "Six", Value: 6, isAce: false},
    {ID: "D7", Suit: "Diamonds", Name: "Seven", Value: 7, isAce: false},
    {ID: "D8", Suit: "Diamonds", Name: "Eight", Value: 8, isAce: false},
    {ID: "D9", Suit: "Diamonds", Name: "Nine", Value: 9, isAce: false},
    {ID: "D10", Suit: "Diamonds", Name: "Ten", Value: 10, isAce: false},
    {ID: "DJ", Suit: "Diamonds", Name: "Jack", Value: 10, isAce: false},
    {ID: "DQ", Suit: "Diamonds", Name: "Queen", Value: 10, isAce: false},
    {ID: "DK", Suit: "Diamonds", Name: "King", Value: 10, isAce: false},
    {ID: "SA", Suit: "Spades", Name: "Ace", Value: 1, isAce: true},
    {ID: "S2", Suit: "Spades", Name: "Two", Value: 2, isAce: false},
    {ID: "S3", Suit: "Spades", Name: "Three", Value: 3, isAce: false},
    {ID: "S4", Suit: "Spades", Name: "Four", Value: 4, isAce: false},
    {ID: "S5", Suit: "Spades", Name: "Five", Value: 5, isAce: false},
    {ID: "S6", Suit: "Spades", Name: "Six", Value: 6, isAce: false},
    {ID: "S7", Suit: "Spades", Name: "Seven", Value: 7, isAce: false},
    {ID: "S8", Suit: "Spades", Name: "Eight", Value: 8, isAce: false},
    {ID: "S9", Suit: "Spades", Name: "Nine", Value: 9, isAce: false},
    {ID: "S10", Suit: "Spades", Name: "Ten", Value: 10, isAce: false},
    {ID: "SJ", Suit: "Spades", Name: "Jack", Value: 10, isAce: false},
    {ID: "SQ", Suit: "Spades", Name: "Queen", Value: 10, isAce: false},
    {ID: "SK", Suit: "Spades", Name: "King", Value: 10, isAce: false},
    {ID: "CA", Suit: "Clubs", Name: "Ace", Value: 1, isAce: true},
    {ID: "C2", Suit: "Clubs", Name: "Two", Value: 2, isAce: false},
    {ID: "C3", Suit: "Clubs", Name: "Three", Value: 3, isAce: false},
    {ID: "C4", Suit: "Clubs", Name: "Four", Value: 4, isAce: false},
    {ID: "C5", Suit: "Clubs", Name: "Five", Value: 5, isAce: false},
    {ID: "C6", Suit: "Clubs", Name: "Six", Value: 6, isAce: false},
    {ID: "C7", Suit: "Clubs", Name: "Seven", Value: 7, isAce: false},
    {ID: "C8", Suit: "Clubs", Name: "Eight", Value: 8, isAce: false},
    {ID: "C9", Suit: "Clubs", Name: "Nine", Value: 9, isAce: false},
    {ID: "C10", Suit: "Clubs", Name: "Ten", Value: 10, isAce: false},
    {ID: "CJ", Suit: "Clubs", Name: "Jack", Value: 10, isAce: false},
    {ID: "CQ", Suit: "Clubs", Name: "Queen", Value: 10, isAce: false},
    {ID: "CK", Suit: "Clubs", Name: "King", Value: 10, isAce: false},
];

//Set initial variables:
var dealtCards = [];
var playersCards = [];
var dealersCards = [];
var playerMoney = 100;
var wager = 0;
var activeHand = false;
var playerDecision = false;
var playerHandValue = 5;
var dealerHandValue = 0;

// Show player money on page load:
$(window).on("load", function() {
    $("#player-money").text("Player money: $" + playerMoney);
});

// Deal cards
$("#deal").on("click", function() {
    if (!activeHand) {
        endHand();
        playersCards = [];
        dealersCards = [];
        dealtCards = [];
        activeHand = true;
        wager = 10;
        playerMoney = playerMoney - wager;
        $("#wager").text("Wager: $" + wager);    
        $("#player-money").text("Player money: $" + playerMoney);
        gameMessage("");
        initialDeal()
        $("#player-card-1").text(playersCards[0].Name + " of " + playersCards[0].Suit);
        $("#player-card-2").text(playersCards[1].Name + " of " + playersCards[1].Suit);
        $("#dealer-card-1").text(dealersCards[0].Name + " of " + dealersCards[0].Suit);
        $("#dealer-card-2").text("xxx");
        playHand();
    }
    else {};
});

// Event listener for player decision buttons:
$("#stand").on("click", playerStand);
$("#hit").on("click", playerHit);
$("#doubleDown").on("click", playerDoubleDown);
$("#split").on("click", playerSplit);
$("#surrender").on("click", playerSurrender);

// Function to update game message:
function gameMessage(message) {
    $("#game-message").text(message);
}

// deal the initial cards to players:
function initialDeal() {
    // deal card 1 to player:   
    playersCards.push(dealCard());
    // deal card 1 to dealier:
    dealersCards.push(dealCard());
    // deal card 2 to player:
    playersCards.push(dealCard());
    // deal card 2 to dealier:
    dealersCards.push(dealCard());
}

function doesPlayerHaveBlackjack(){
    if (playersCards[0].isAce || playersCards[1].isAce) {
        //then need to establish if second card has a ten value...
        if (playersCards[0].isAce && playersCards[1].Value === 10){
            return true;
        } else if (playersCards[1].isAce && playersCards[0].Value === 10) {
                return true;
            } else {
                return false;
            } 
    } else {
        return false;
    }
}

function doesDealerHaveBlackjack() {
    if (dealersCards[0].isAce || dealersCards[1].isAce) {
        //then need to establish if second card has a ten value...
        if (dealersCards[0].isAce && dealersCards[1].Value === 10){
            return true;
        } else if (dealersCards[1].isAce && dealersCards[0].Value === 10) {
                return true;
            } else {
                return false;
            } 
    } else {
        return false;
    }
}

function playerStand() {
    if (playerDecision) {
        gameMessage("Player stands");
        playerDecision = false;
        dealerTurn();
    } 
}

function playerHit() {
    if (playerDecision) {
        gameMessage("Player hits");
        playerHandValue = 0
        playersCards.push(dealCard());
        var newCard = playersCards[playersCards.length-1].Name + " of " 
        + playersCards[playersCards.length-1].Suit
        gameMessage("Player new card: " + newCard);
        $("#player-card-2").after("<h2 class='additional-card'> " + newCard + "</h2>");
        playersCards.forEach(card => {
            playerHandValue += card.Value;
        });
        console.log(calculateScore(playersCards));
        if (playerHandValue > 21) {
            gameMessage("Player Busts!");
            playerDecision = false;
            activeHand = false;
        }
    }
}

function playerDoubleDown() {
    if (playerDecision) {
        gameMessage("Player Doubles Down");
        playerHandValue = 0
        playersCards.push(dealCard());
        var newCard = playersCards[playersCards.length-1].Name + " of " 
        + playersCards[playersCards.length-1].Suit
        gameMessage("Player new card: " + newCard);
        $("#player-card-2").after("<h2 class='additional-card'> " + newCard + "</h2>");
        playersCards.forEach(card => {
            playerHandValue += card.Value;
        });
        if (playerHandValue > 21) {
            gameMessage("Player Busts!");
            playerDecision = false;
            activeHand = false;
        } else {
            playerDecision = false;
            dealerTurn();
        }
    }  
}

function playerSurrender() {
    if (playerDecision) {
        gameMessage("Player Surrenders");
        playerMoney = playerMoney + (wager * 0.5);
        gameMessage("Player money: $" + playerMoney);
        playerDecision = false;
        activeHand = false;
    }
}

function playerSplit() {
    if (playerDecision) {
        if (playersCards[0].Name === playersCards[1].Name) {
            alert("Sorry! Split functinality is still in development. Coming soon :)");
        }
    }
}

function dealerTurn() {
    gameMessage("Dealer's Turn");
    $("#dealer-card-2").text(dealersCards[1].Name + " of " + dealersCards[1].Suit);
    // Need to also add functionality for Aces - as treated as 1 / 11...
    dealersCards.forEach(card => {
        dealerHandValue += card.Value;
    });
    while (dealerHandValue < 17) {
        dealerHandValue = 0;
        dealersCards.push(dealCard());
        var newCard = dealersCards[dealersCards.length-1].Name + " of " 
        + dealersCards[dealersCards.length-1].Suit
        gameMessage("Dealer's new card: " + newCard);
        $("#dealer-card-2").after("<h2 class='additional-card'> " + newCard + "</h2>");
        dealersCards.forEach(card => {
            dealerHandValue += card.Value;
        });
    }
    console.log(calculateScore(dealersCards));
    // Detmine who wins...
    if (dealerHandValue > 21) {
        gameMessage("Dealer Busts! Player Wins: $" + wager);
        playerMoney = playerMoney + wager + wager;
        $("#player-money").text("Player money: $" + playerMoney);
    } else if (dealerHandValue > playerHandValue) {
        gameMessage("Dealer wins!");
    } else if (dealerHandValue === playerHandValue) {
        gameMessage("Push!");
        playerMoney += wager;
        $("#player-money").text("Player money: $" + playerMoney);
    } else {
        gameMessage("Player wins :)");
        playerMoney = playerMoney + wager + wager;
        $("#player-money").text("Player money: $" + playerMoney);
    }
    activeHand = false;
}

//Hand mechanics:
function playHand(){
playerHandValue = playersCards[0].Value + playersCards[1].Value;
playerDecision = true;
// First- establish if player has blackjack and does Dealer have blackjack?
if (doesPlayerHaveBlackjack() && !doesDealerHaveBlackjack()) {
    playerMoney = playerMoney + (wager * 1.5) + wager;
    $("#player-money").text("Player money: $" + playerMoney);
} else if (doesPlayerHaveBlackjack() && doesDealerHaveBlackjack()) {
    gameMessage("Both player and dealer have BlackJack! Wager returned");
    playerMoney += wager;
    $("#player-money").text("Player money: $" + playerMoney);
} else {
    // give player next options - stand, hit, double down, split, surrender - via eventListeners
    gameMessage("Player's turn, what action would you like to take?");
};
}


// Dealing Mechanics:
function dealCard() {
    var randomNumber = Math.floor(Math.random()*52);
    var selectedCard = deckOfCards[randomNumber];
    while (dealtCards.includes(selectedCard)) {
        var randomNumber = Math.floor(Math.random()*52);
        var selectedCard = deckOfCards[randomNumber];
    }
    dealtCards.push(selectedCard);
    return selectedCard;
}

// End-hand function
function endHand() {
    gameMessage("Press deal button to start again");
    $("#player-card-1").text("");
    $("#player-card-2").text("");
    $("#dealer-card-1").text("");
    $("#dealer-card-2").text("");
    $(".additional-card").remove();
    playerHandValue = 0;
    dealerHandValue = 0;
    $("#player-money").text("Player money: $" + playerMoney);
    $("#wager").text("Wager: $");
    playerDecision = false;
}

// End-hand listener (currently for debugging only):
$("#endHand").on("click", function() {
    activeHand = false;
    endHand();
})

function calculateScore(array) {
    // use the function's inject to determine which array to perform the calculation against:
    // for that array, determine if the array contains an ace?
    var hasAce = false;
    var numberOfAces = 0;
    handValue = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i].isAce) {
            hasAce = true;
            numberOfAces++;
            console.log(numAces);
        }
    }
    if (hasAce) {
        var aceArray = []
        console.log(array + "contains an ace");
        array.forEach(card => {
            handValue += card.Value;
        });
        aceArray.push(handValue);
        for (i = 1; i <= numberOfAces; i++) {
            aceArray.push(handValue + 10);
        }
        aceArray.sort(function(a, b){return b - a});
        aceArray.forEach(val => {
            if (val <= 21) {
                handValue = val;
                console.log("best hand value is" + handValue);
                return handValue;
            }
        });
        } else {
            console.log(array + "does not contain an Ace");
            array.forEach(card => {
            handValue += card.Value;
            return handValue;
        });
    }
}


