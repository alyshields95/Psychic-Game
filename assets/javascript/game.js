//Comp choices
var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//User choices    
var userGuesses = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Ready to start
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];

//key up
document.onkeyup = function(event) {
    var userGuesses = event.key;

//comp picks random letter
var compGuesses = compChoices[Math.floor(Math.random() * compChoices.length)];

//logs user and comp choices
    console.log('userGuesses', userGuesses, 'compGuesses', compGuesses); 

//Logging keys pressed
guessedLetters.push(userGuesses);
document.getElementById('guessedLetters').innerHTML = "Guess Letters: " + guessedLetters.join(': ');   

//Wins & Losses
if (userGuesses == compGuesses) {
    wins ++;
      } 
if (userGuesses != compGuesses) {
    guessesLeft--,
    document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
      }

    
// logs everything to verify working
console.log('wins: ', wins, 'losses: ', losses, 'guesses left: ', guessesLeft, 'guessed letters: ', guessedLetters)      

//Actual reset
var reset = function() {
    guessesLeft = 10;
    guessedLetters = [];
  }

  //calls the reset
if (guessesLeft > 0){
    if (userGuesses == compGuesses) {
      //update wins
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        alert("OMG YOU ARE PSYCHIC!! NOW WHAT'S THE LOTTERY NUMBERS?!");
        reset();
    }
    }else if(guessesLeft == 0){
      // update losses 
      losses++;
      document.getElementById('losses').innerHTML = "Losses: " + losses;
      alert("Sorry but you might want to try again?!"); 
      reset();
}
