//Comp choices
var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//User choices    
var userGuesses = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//start
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];

//Key up
document.onkeyup = function(event) {
    var userGuesses = event.key;

//Comp picks a letter
var compGuesses = compChoices[Math.floor(Math.random() * compChoices.length)];

//user and comp choices
    console.log('userGuesses', userGuesses, 'compGuesses', compGuesses); 


guessedLetters.push(userGuesses);
document.getElementById('guessedLetters').innerHTML = "Your guesses so far: " + guessedLetters.join(': ');   

//Wins & Losses
if (userGuesses == compGuesses) {
    wins ++;
      } 

if (userGuesses != compGuesses) {
    guessesLeft--,
    document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
      }

// log
console.log('wins: ', wins, 'losses: ', losses, 'guesses left: ', guessesLeft, 'guessed letters: ', guessedLetters)      

//reset
var reset = function() {
    guessesLeft = 10;
    guessedLetters = [];
  }


if (guessesLeft > 0){
    if (userGuesses == compGuesses) {

        document.getElementById('wins').innerHTML = "Wins: " + wins;
        alert("YOU ARE A PSYCHIC!!");
        reset();
    }
    }else if(guessesLeft == 0){

      losses++;
      document.getElementById('losses').innerHTML = "Losses: " + losses;
      alert("Sorry! Would you like to try again?!"); 
      reset();
}
};
