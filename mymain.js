function Pirate(beverage, bottles) {
	this.beverage = beverage;
	this.bottles = bottles;
	this.pirate_theme = function(){
		console.log("yo ho me hearties" + " " + "drink up ye" + " " + this.bottles + " of " + this.beverage);
	}
}
var blackbeard = new Pirate("rum",4);
var redbeard = new Pirate("beer",8);

blackbeard.isBald = true;

Pirate.prototype.enough = function(){
		if (this.bottles > 5){
			console.log(this.bottles + "! " + "Ye have had enough matey");
		}	
		else {
			console.log("ei drink on!")
		}
};

function DeckPirate(pretty){
	this.pretty = pretty;
	this.swabTheDeck = function (){
		if (this.bottles > 2){
			console.log("you have to swabbed the deck ye lazy scoundral");
		}
		else {
			console.log("aye she sparkles like the sun");
		}
	}
	this.captainsHat = true;
}
DeckPirate.prototype = new Pirate("rum",0);

whitebeard = new DeckPirate("so pretty");



	