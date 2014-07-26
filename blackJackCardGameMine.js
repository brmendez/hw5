//Blackjack game, need 2 objects. Card, Deck.

function Card(rank, suit){
	this.rank = rank; //number of the card
	this.suit = suit; //Hearts, Clubs, Diamonds, Spades
	this.pointValue = function(){
  } //1-11 card value
}
function Deck(){
	this.cards = []; //an Array is meant to hold many things
	this.buildDeck = function(){ //create a card
		for (var r=0; r<4; r++){ //for rank, i can also put 'var r =' in for loop
			for (var s=0; s<13; s++){
        var card = new Card(r, s); // Pulls from lines 17 and 18 
        this.cards.push(card); //this pushes card made on line 19 in to the Array of this object, on line 15
		  }
		}

	}
  this.shuffle = function(){
    for (i=0; i<52; i++){
      var cardShuffle = this.cards.shift()
      var randomIndex = Math.floor(Math.random() * 52)
      this.cards.splice(randomIndex, 1, cardShuffle) //The splice() method adds/removes items to/from an array, and returns the removed item(s)
    }
  }
}
function Player(name, deck){
  this.name = name;
  this.deck = deck;
  this.hand = [];
  this.hitMe = function(){
    this.deal()
  }
  this.deal = function(){
    var card = deck.cards.shift() //takes card off deck (left side, index 0, left to right)
    this.hand.push(card) //push puts in to hand (puts object on right hand side of array)
  }
  // var totalPoint = function(){
  //   for ()
  // }
}
  console.log()
  var d = new Deck(); //this makes a new instance of a Deck object
  d.buildDeck(); //this calls method on line 14. Cards are pushed on to the cards Array
  d.shuffle();
  console.log(d);
  var p1 = new Player("Brian", d); //
  var dealer = new Player("Dealer", d);

  for(i=0;i<2;i++){
    p1.deal();
    dealer.deal();
  }
//need to make POINT value function in Card object
//need shuffle method in Card object
//need to play game
//need method to add point values in Player
