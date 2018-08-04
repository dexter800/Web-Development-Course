// Counting Cards 
/*In the casino game Blackjack, 
a player can gain an advantage over the
house by keeping track of the relative number of
high and low cards remaining in the deck. 
This is called Card Counting.When the count is positive, the player 
should bet high.When the count is zero or negative, the player should bet low.*/

var count = 0; 
function cardCounting (card) {
    switch(card) {
        // count will be +1 when card disply 2,3,4,5,6
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        count++; 
        break;
    // Count will be -1 when card display 10,'j','Q',"K","A". 
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
        count--; 
        break;

    if (count>0){return count +"Bet";}
    else {return count + "Hold";}
}

}
