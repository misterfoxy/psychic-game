var letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
'o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guessedLetters=[];

function chooseLetter(letters){
  return letters[Math.floor(Math.random() * letters.length)];
}

function updateTimer(){
  var guessesLeft = document.getElementById('guessesLeft');
  var number = guessesLeft.innerHTML;
  number--;
  guessesLeft.innerHTML = number;
}

function resetTimer(){
  var guessesLeft = document.getElementById('guessesLeft');
  var number = guessesLeft.innerHTML;
  number = 10;
  guessesLeft.innerHTML = number;

}

function checkTimer(){
  var guessesLeft = document.getElementById('guessesLeft');
  var number = guessesLeft.innerHTML;

  var numLosses = document.getElementById('losses');
  var losses = numLosses.innerHTML;

  if (number < 1){
    losses ++;
    document.getElementById('losses').innerHTML = losses;
    resetGuessedLetters();
    resetTimer();
  }
}

function resetGuessedLetters(){
  guessedLetters=[];
  document.getElementById('guessedLetters').innerHTML = guessedLetters;
}


document.onkeyup = function(event) {

  updateTimer();

  var answer = chooseLetter(letters);
  var guess = String.fromCharCode(event.keyCode).toLowerCase();

    if (guess != answer){
      guessedLetters.push(" " + guess);
      document.getElementById('guessedLetters').innerHTML = guessedLetters;
    }

  checkTimer();

  if(guess === answer){
    wins++;
    document.getElementById('wins').innerHTML = wins;
    resetGuessedLetters();
    resetTimer();
  }
};
