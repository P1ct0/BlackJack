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
var playerHandValue = 0;
var dealerHandValue = 0;
var popupActive = false;

// Show player money on page load:
$(window).on("load", function() {
    $("#player-money").text("Player money: $" + playerMoney);
});

// Event Listener on Click of "Deal" button:
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
        $("#player-card-1").attr("src","Images/Cards/" + playersCards[0].ID + ".png");
        $("#player-card-2").attr("src","Images/Cards/" + playersCards[1].ID + ".png");
        $("#dealer-card-1").attr("src","Images/Cards/" + dealersCards[0].ID + ".png");
        $("#dealer-card-2").attr("src","Images/Cards/Back.png");
        playHand();
    }
    else {};
});

// Initial Hand mechanics:
function playHand(){
    playerHandValue = calculateScore("player")
    // First- establish if player has blackjack and does Dealer have blackjack?
    if (calculateScore("player") === 21 && calculateScore("dealer") !== 21) {
        playerMoney = playerMoney + (wager * 1.5) + wager;
        $("#player-money").text("Player money: $" + playerMoney);
        messagePopup("Playe has BlackJack! Winnings: $" + (wager * 1.5));
        endHand();
    } else if (calculateScore("player") === 21 && calculateScore("dealer") === 21) {
        messagePopup("Push! Both Player and Dealer have Blackjack")
        playerMoney += wager;
        $("#player-money").text("Player money: $" + playerMoney);
        endHand();
    } else {
        // if not blackjack: give player next options activate playerDecision:
        gameMessage("Player's turn, what action would you like to take?");
        playerDecision = true;
    }
}

// Event Listener on Chips
$(".chip-img").on("click", function() {
    if (!activeHand) {
        switch (this.id) {
            case "one-chip": console.log("Bet 1");
                break;
            case "five-chip": console.log("Bet 5");
                break;
            case "ten-chip": console.log("Bet 10");
                break;
            case "twentyfive-chip": console.log("Bet 25");
                break;
            case "fifty-chip": console.log("Bet 50");
                break;
            default:
        }
    }
})


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

// Event listener for player decision buttons:
$("#stand").on("click", playerStand);
$("#hit").on("click", playerHit);
$("#doubleDown").on("click", playerDoubleDown);
$("#split").on("click", playerSplit);
$("#surrender").on("click", playerSurrender);

// Event Listenter for popup box actions (initial testing / debug)
$("#box-test").on("click", function() {
    messagePopup("New String :)");
});

// Functions for player actions based on above Event Listeners:

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
        playersCards.push(dealCard());
        $("#player-card-2").after("<img class='card-img additional-card' src='Images/Cards/" + playersCards[playersCards.length-1].ID + ".png'>"); // + playersCards[playersCards.length-1].ID + ".png>");
        playerHandValue = calculateScore("player");
        if (playerHandValue > 21) {
            messagePopup("Player Busts");
            playerDecision = false;
            activeHand = false;
        }
    }
}

// Functions DoubleDown, Surrender, Split are not currently in use... (buttons hidden via CSS for now)
function playerDoubleDown() {
    if (playerDecision) {
        gameMessage("Player Doubles Down");
        playersCards.push(dealCard());
        $("#player-card-2").after("<img class='card-img additional-card' src='Images/Cards/" + playersCards[playersCards.length-1].ID + ".png'>");
        playerHandValue = calculateScore("player");
        if (playerHandValue > 21) {
            messagePopup("Player Busts");
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

// When play is then passed onto dealer after player Holds or "Doubles Down":
function dealerTurn() {
    gameMessage("Dealer's Turn");
    $("#dealer-card-2").attr("src","Images/Cards/" + dealersCards[1].ID + ".png")
    dealerHandValue = calculateScore("dealer");
    while (dealerHandValue < 17) {
        dealersCards.push(dealCard());
        $("#dealer-card-2").after("<img class='card-img additional-card' src='Images/Cards/" + dealersCards[dealersCards.length-1].ID + ".png'>");
        dealerHandValue = calculateScore("dealer");
    }
    // Detmine who wins...
    if (dealerHandValue > 21) {
        messagePopup("Dealer Busts! Player wins: $" + wager);
        playerMoney = playerMoney + wager + wager;
        $("#player-money").text("Player money: $" + playerMoney);
    } else if (dealerHandValue > playerHandValue) {
        messagePopup("Dealer Wins")
    } else if (dealerHandValue === playerHandValue) {
        messagePopup("Push")
        playerMoney += wager;
        $("#player-money").text("Player money: $" + playerMoney);
    } else {
        messagePopup("Player Wins: $" + wager);
        playerMoney = playerMoney + wager + wager;
        $("#player-money").text("Player money: $" + playerMoney);
    }
    activeHand = false;
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
    $(".additional-card").remove();
    playerHandValue = 0;
    dealerHandValue = 0;
    $("#player-money").text("Player money: $" + playerMoney);
    $("#wager").text("Wager: $");
    playerDecision = false;
    $("#player-card-1").attr("src","Images/Cards/Back.png");
    $("#player-card-2").attr("src","Images/Cards/Back.png");
    $("#dealer-card-1").attr("src","Images/Cards/Back.png");
    $("#dealer-card-2").attr("src","Images/Cards/Back.png");
}

// End-hand listener (currently for debugging only):
$("#endHand").on("click", function() {
    activeHand = false;
    endHand();
})

// Function to update in-game message:
function gameMessage(message) {
    $("#game-message").text(message);
}

// Function to display pop-up end of game message for 2seconds:
function messagePopup(string) {
    $("#popup-message").text(string);
    $("#message-box-popup").toggleClass("hidden-box");
    setTimeout(() => {
        $("#message-box-popup").toggleClass("hidden-box");
    }, 2000);
}

// Function to calculate the value of a hand (players or dealers depending on parameter passed in):
function calculateScore(whoseScore) {
    var hasAce = false;
    var numberOfAces = 0;
    handValue = 0;
    var array = "";
    if (whoseScore === "player") {
        array = playersCards;
    } else if (whoseScore === "dealer") {
        array = dealersCards;
    }
    for (i = 0; i < array.length; i++) {
        if (array[i].isAce) {
            hasAce = true;
            numberOfAces++;
        }
    }
    if (!hasAce) {
            array.forEach(card => {
                handValue += card.Value;
            });
            return handValue;
        } else {
        var aceArray = []
        array.forEach(card => {
            handValue += card.Value;
        });
        aceArray.push(handValue);
        for (i = 1; i <= numberOfAces; i++) {
            aceArray.push(handValue + 10);
        }
        aceArray.sort(function(a, b){return b - a});
        for (i = 0; i < aceArray.length; i++) {
            if (aceArray[i] <= 21) {
                handValue = aceArray[i];
                return handValue;
            }
        }
    }
}
