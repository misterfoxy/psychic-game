console.log(`%c ________________________________________
< mooooooooooooooooooooooooooooooooooooo >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
|| ||`);

console.log("Look what we have here! A super sly developer who knows they can find the answer by checking out dev tools!");


var letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
'o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guessedLetters=[];
var isGuessed = false;
var answer = chooseLetter(letters);
console.log("The answer is: " + answer)

function chooseLetter(letters){
  return letters[Math.floor(Math.random() * letters.length)];
}

function updateTimer(){
  var guessesLeft = document.getElementById('guessesLeft');
  var number = guessesLeft.innerHTML;

  if(isGuessed == false){
    number--;
    guessesLeft.innerHTML = number;
  }
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

function checkGuessed(guess){
  for (var i = 0; i < guessedLetters.length; i++){
    if(guess === guessedLetters[i]){
      isGuessed = true;
    } else {
      isGuessed = false;
    }
  }
  return isGuessed;
}


document.onkeyup = function(event) {


  var guess = String.fromCharCode(event.keyCode).toLowerCase();

  isGuessed = checkGuessed(guess);

  if(guess === answer){
    wins++;
    document.getElementById('wins').innerHTML = wins;
    resetGuessedLetters();
    resetTimer();
    answer = chooseLetter(letters);
    console.log("The new answer is: " + answer);
  }

  else if (guess !== answer && isGuessed === false) {
      guessedLetters.push(guess);
      document.getElementById('guessedLetters').innerHTML = guessedLetters;
      updateTimer();
    }


  checkTimer();

};
