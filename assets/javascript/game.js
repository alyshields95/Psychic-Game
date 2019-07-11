//Comp choices
var compChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//User choices    
var userGuesses = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Ready to start
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = [];

//Key up function
document.onkeyup = function(event) {
    var userGuesses = event.key;

//Comp picks a random letter
var compGuesses = compChoices[Math.floor(Math.random() * compChoices.length)];

//Logs user and comp choices
    console.log('userGuesses', userGuesses, 'compGuesses', compGuesses); 

//Logging keys 
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

// logs everything to confirm it's working 
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
        alert("YOU ARE A PSYCHIC!!");
        reset();
    }
    }else if(guessesLeft == 0){
      // update losses 
      losses++;
      document.getElementById('losses').innerHTML = "Losses: " + losses;
      alert("Sorry! Would you like to try again?!"); 
      reset();
}
};
